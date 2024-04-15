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
    property string schema_name

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

        console.log('GOT');

        const schema = schema_name || 'default';

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

                    const tableName = `${userName}_${schema}_${table.definitionKey}`
                    console.log(tableName);

                    const sqlStringSelect = `SELECT * FROM ${tableName}z`;
                    var rs = tx.executeSql(sqlStringSelect, executeResult);
                    console.log(JSON.stringify(rs));

                    const sqlStringDrop = `DROP TABLE IF EXISTS ${tableName}`;
                    tx.executeSql(sqlStringDrop, executeResult);

                    const sqlStringCreate = `CREATE TABLE IF NOT EXISTS ${tableName}(${table.fields.join(',')})`;
                    tx.executeSql(sqlStringCreate, executeResult);
                }

                const sqlStringTables2 = `SELECT * FROM sqlite_temp_master`;
                var rs = tx.executeSql(sqlStringTables2, executeResult);
                console.log(JSON.stringify(rs));

                const sqlStringTables = `SELECT * FROM sqlite_master`;
                rs = tx.executeSql(sqlStringTables, executeResult);
            }
        )

    }

    function sendHttpRequest() : void {


        const body = JSON.stringify({
        });

        var http = new XMLHttpRequest()
        var url = apiHost + endpointLogin;

        http.open("GET", url, true);

        http.setRequestHeader("accept", "application/json");
        http.setRequestHeader("Content-type", "application/json");
        http.setRequestHeader("Connection", "close");

        if(schema_name){
            http.setRequestHeader("Accept-Profile", schema_name);
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
