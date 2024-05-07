pragma Singleton

import QtQuick 2.15
import QtQuick.LocalStorage

import AuthOpenApi 1.0

QtObject {

    id: syncUtils

    signal hostChanged(newHost: variant)

    property string openApiHost: "https://wo-apps.thuenen.de/postgrest/"
    property string schemataEndpoint: "my_schemata"
    property bool isDefaultSchema: true
    property string schemaPrefix: "public_"

    // local DB name
    property string dbName: "SyncDB"


    property var db: LocalStorage.openDatabaseSync(dbName, "1.0", "OpenApi to local", 1000000); // 1 MB


    function setHost(hostData){
        openApiHost = hostData.openApiHost;
        schemataEndpoint = hostData.schemataEndpoint;
        isDefaultSchema = hostData.isDefaultSchema || false;
        schemaPrefix = hostData.schemaPrefix || "public_";

        syncUtils.hostChanged(hostData);
    }

    // Sync all tables from selected schema
    function syncTables(schemaName, callback = () => {}){

        // TODO GET USERNAME
        const email = AuthUtils.tokenPayload().email;
        
        // settings.value('activeUser')

        sendHttpRequest(null, (result) => {
            if(!result.error){
                buildSqlite(result.data.definitions, schemaName, email, callback);
            }else{
                callback(result);
            }
        }, schemaName);
    }
    function buildSqlite(definitions, schema_name, userId = 'anonymous', callback = () => {}) {
        if(!schema_name){
            console.log('No schema name set');
            return;
        }else if (!definitions){
            console.log('No definitions set');
            return;
        }

        const tables = [];

        for (const [definitionKey, definition] of Object.entries(definitions)) {
            const fields = [];

            for (const [key, value] of Object.entries(definition.properties)) {

                let sqLiteFormat = 'TEXT';

                if( value.format.includes('int') )
                    sqLiteFormat = 'INTEGER'
                else if ( value.format.includes('double') || value.format.includes('REAL') || value.format.includes('float') )
                    sqLiteFormat = 'INTEGER'


                fields.push(`${key} ${sqLiteFormat}`);

            }

            tables.push({
                definitionKey,
                fields
            });
        }

        db.transaction(
            function(tx) {
               for(const table of tables){

                    const userName = userId.replace(/[^\w\s]/gi, '')

                    const tableName = `${userName}$${schema_name}$${table.definitionKey}`


                    const sqlStringDrop = `DROP TABLE IF EXISTS ${tableName};`;
                    tx.executeSql(sqlStringDrop);

                    if(tableName === 'gerritbalindtthuenende$bwi_de_002_dev$z3_tab'){
                        console.log('z3_tab', table.fields.join(','));
                        // z3_tab -> tbdbname
                        
                    }

                    const sqlStringCreate = `CREATE TABLE IF NOT EXISTS ${tableName}(${table.fields.join(',')});`;
                    tx.executeSql(sqlStringCreate);

                   
                    sendHttpRequest(table.definitionKey, (result) => {
                        if(!result.error){
                            addRowsToTable(tableName, result.data);

                            callback({
                                data: tables
                            })

                        }else
                            callback(result);
                    }, schema_name);
                }
            }
        )
    }
    function addRowsToTable(tableName, object): void {
        db.transaction(
            function(tx) {
                for(const row of object){
                    const keys = Object.keys(row)
                    const values = Object.values(row)
                    const encValues = values.map(x => typeof x == 'number'? x : `"${x}"`)

                     
                    const sqlStringCreate = `INSERT INTO ${tableName} (${keys}) VALUES (${encValues});`;
                    tx.executeSql(sqlStringCreate);
                }
            }
        )
    }


    function usernameToTableName(username){
        return username.replace(/[^\w\s]/gi, '');
    }
    function select(tableName, where){

        if(!tableName){
            return false;
        }

        const payload = AuthUtils.tokenPayload();
        const userName = usernameToTableName(payload.email);

        
        const filteredTables = this.tables().filter(t => t.name.startsWith(userName + '$') && t.name.endsWith('$' + tableName));

        const sqlString = `SELECT * FROM ${filteredTables[0].name} ${where};`;

        const rows = [];
        
        db.transaction(
            function(tx) {
                const result = tx.executeSql(sqlString);

                for(var i = 0; i < result.rows.length; i++) {
                    rows.push(result.rows.item(i));
                }
            }
        )
        return rows;
    }
    
    function tables(fn){
        const tables = [];
        db.transaction(
            function(tx) {

                const sqlStringTables2 = `SELECT name FROM sqlite_schema;`;
                var rs2 = tx.executeSql(sqlStringTables2);
                for(var i = 0; i < rs2.rows.length; i++) {

                    const tableName = rs2.rows.item(i).name;

                    const sqlStringDrop = `SELECT COUNT(*) FROM "${tableName}";`;
                    const res = tx.executeSql(sqlStringDrop);

                    tables.push({
                        name: tableName,
                        rowsCount: res.rows.item(0)['COUNT(*)']
                    })
                }
            }
        )
        return tables;
    }
    function dropTables(tables){
        db = LocalStorage.openDatabaseSync(dbName, "1.0", "The Example QML SQL!", 1000000); // 1 MB

        db.transaction(
            function(tx) {
                for(const tableName of tables){
                    
                    const sqlStringDrop = `DROP TABLE IF EXISTS ${tableName};`;

                    try{
                        tx.executeSql(sqlStringDrop);
                    } catch(e) {
                        console.log(e);
                    }


                }
            }
        )
        return true
    }

    // HELPER
    function error(message){
        console.log('ERROR: ' + message);
        return {
            error: message
        }
    }
    function sendHttpRequest(endPoint, callback, schema, type = 'GET', body = {}) : void {

        let errorMessage = ""

        if(!callback) {
            errorMessage = "Kein Callback angegeben"
            callback(error(errorMessage));
            return
        }

        body = JSON.stringify(body);

        var http = new XMLHttpRequest()
        var url = openApiHost;
        if(endPoint)
            url += endPoint;

        http.open(type, url, true);

        http.setRequestHeader("accept", "application/json");
        http.setRequestHeader("Content-type", "application/json");
        if(schema){
            http.setRequestHeader("Accept-Profile", schema);

            const token = AuthUtils.getToken();
            if(token){
                http.setRequestHeader("Authorization", `bearer ${token}`);
            }

        }
            
        
        http.setRequestHeader("Connection", "close");

        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                console.log(http.status);
                // server down: TODO: Check Server before form is shown
                if(http.responseText == '') {
                    errorMessage = "Server nicht erreichbar"
                    callback(error(errorMessage));
                    return
                }
                var object = JSON.parse(http.responseText.toString());

                
                if (http.status == 200) {
                    callback({
                        data: object
                    });
                } else {
                    console.log(JSON.stringify(object));
                    errorMessage = object.message
                    callback(error(errorMessage));
                }
            }
        }
        http.send(body);
    }
    // on PUBLIC SCHEMA
    function getSchemata(callback = () => {}){

        sendHttpRequest(schemataEndpoint, (result) => {

            // filter relevant schemas only
            if(!result.error){
                result.data = result.data.filter((schema) => {
                    return schema.schema_name.startsWith(schemaPrefix)
                })
            }
            
            callback(result)
        });
        
    }
}
