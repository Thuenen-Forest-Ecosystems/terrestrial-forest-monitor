import QtQuick 2.15
import QtQuick.LocalStorage
import QtQuick.Controls 6.2
import QtCore

import AuthOpenApi

Item {

    property string dbName: "SyncDB"
    property var db

    property string apiHost: "https://wo-apps.thuenen.de/postgrest/"
    property string endpointLogin: ""
    property string schema_name: "bwi_de_001_dev"

    property alias settings: settings
    property string token

    width: syncBtn.width


    Button {
        id:syncBtn
        text: qsTr(schema_name || 'default DB')
        Connections {
            function onClicked(){
                sendHttpRequest()
            }
        }
    }
    Settings {
        id: settings
        category: "User"
    }

    AuthWrapper{
        id:authWrapper
    }

    Component.onCompleted: {
        db = LocalStorage.openDatabaseSync(dbName, "1.0", "The Example QML SQL!", 100000000); // 100 MB

        settings.sync();
        token = settings.value('activeToken')
        console.log( 'authWrapper token: ', token );
    }

    function executeResult(trans, results) {
        console.log(trans, results);
    }

    function buildSqlite(definitions) {
        if(!definitions) return;



        const schema = schema_name || 'default';
        console.log('GOT:', schema);

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
                    console.log('ADD');

                    const userName = settings.value('activeUser').replace(/[^\w\s]/gi, '')

                    const tableName = `${userName}$${schema}$${table.definitionKey}`


                    const sqlStringDrop = `DROP TABLE IF EXISTS ${tableName};`;
                    //tx.executeSql(sqlStringDrop);

                    const sqlStringCreate = `CREATE TABLE IF NOT EXISTS ${tableName}(${table.fields.join(',')});`;
                    tx.executeSql(sqlStringCreate, executeResult);

                    fillSqlite(tableName, table.definitionKey);
                }
            }
        )

        listTables()
    }
    function listTables(){
        const tables = [];
        db.transaction(
            function(tx) {
                const sqlStringTables2 = `SELECT name FROM sqlite_schema;`;
                var rs2 = tx.executeSql(sqlStringTables2, executeResult);
                for(var i = 0; i < rs2.rows.length; i++) {
                    tables.push(rs2.rows.item(i).name)
                    console.log(JSON.stringify(rs2.rows.item(i)));
                }
            }
        )
        return tables;
    }
    function addRowsToTable(tableName, object): void {
        db.transaction(
            function(tx) {
                console.log(JSON.stringify(object));
                for(const row of object){
                    const keys = Object.keys(row)
                    const values = Object.values(row)
                    const encValues = values.map(x => typeof x == 'number'? x : `"${x}"`)

                    const sqlStringCreate = `INSERT INTO ${tableName} (${keys}) VALUES (${encValues});`;
                    tx.executeSql(sqlStringCreate, executeResult);
                }
            }
        )
        /*db.transaction(
            function(tx) {
                const sqlStringTables2 = `SELECT * FROM ${tableName};`;
                var rs = tx.executeSql(sqlStringTables2, executeResult);
                for(const row in rs.rows){
                    console.log(JSON.stringify(row));
                }
                for(var i = 0; i < rs.rows.length; i++) {
                    console.log(JSON.stringify(rs.rows.item(i)));
                }
            }
        )*/
    }
    function fillSqlite(tableName, definitionKey): void {
        console.log(definitionKey);

        const body = JSON.stringify({
        });

        var http = new XMLHttpRequest()
        var url = apiHost + definitionKey;

        console.log(url, token);

        http.open("GET", url, true);

        http.setRequestHeader("accept", "application/json");
        http.setRequestHeader("Content-type", "application/json");
        http.setRequestHeader("Connection", "close");

        if(schema_name){
            // https://postgrest.org/en/v12/references/api/schemas.html
            http.setRequestHeader("Accept-Profile", schema_name); // GET or HEAD
            //http.setRequestHeader("Content-Profile", schema_name); // POST, PATCH, PUT and DELETE
        } // Else default DB

        if(token){
            http.setRequestHeader("Authorization", `bearer ${token}`);
        }


        http.onreadystatechange = function() {
            if (http.readyState == 4) {


                var object = JSON.parse(http.responseText.toString());

                addRowsToTable(tableName, object);
                return;

            }
        }
        http.send(body);
    }

    function sendHttpRequest() : void {


        const body = JSON.stringify({
        });

        var http = new XMLHttpRequest()
        var url = apiHost + endpointLogin;

        http.open("GET", url, true);

        //http.setRequestHeader("accept", "application/json");
        //http.setRequestHeader("Content-type", "application/json");
        //http.setRequestHeader("Connection", "close");

        if(schema_name){
            // https://postgrest.org/en/v12/references/api/schemas.html
            http.setRequestHeader("Accept-Profile", schema_name); // GET or HEAD
            //http.setRequestHeader("Content-Profile", schema_name); // POST, PATCH, PUT and DELETE
        } // Else default DB

        if(token){
            http.setRequestHeader("Authorization", `baerer ${token}`);
        }


        http.onreadystatechange = function() {
            if (http.readyState == 4) {


                var object = JSON.parse(http.responseText.toString());

                buildSqlite(object.definitions);
                return;

            }
        }
        http.send(body);
    }

}
