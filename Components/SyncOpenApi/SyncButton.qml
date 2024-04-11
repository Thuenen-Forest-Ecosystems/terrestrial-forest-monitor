import QtQuick 2.15
import QtQuick.LocalStorage
import QtQuick.Controls 6.2

Item {

    property string dbName: "SyncDB"
    property var db

    property string apiHost: "https://wo-apps.thuenen.de/postgrest/"
    property string endpointLogin: ""
    property string schema_name

    width: syncBtn.width


    Button {
        id:syncBtn
        text: qsTr(schema_name || 'default DB')
        Connections {
            onClicked: sendHttpRequest()
        }
    }

    Component.onCompleted: {
        db = LocalStorage.openDatabaseSync(dbName, "1.0", "The Example QML SQL!", 100000000); // 100 MB
        console.log('Complete', schema_name);
    }

    function executeResult(trans, results) {
        console.log(results);
    }

    function buildSqlite(definitions) {
        if(!definitions) return;

        const schema = schema_name || 'default';

        console.log('GOT VALUES');
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
                    const sqlString = `CREATE TABLE IF NOT EXISTS ${schema}_${table.definitionKey}(${table.fields.join(',')})`;
                    tx.executeSql(sqlString, executeResult);
                }
            }
        )

    }

    function sendHttpRequest() : void {

        console.log(schema_name, token);
        return;


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
