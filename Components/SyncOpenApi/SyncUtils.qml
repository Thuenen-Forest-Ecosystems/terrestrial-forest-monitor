pragma Singleton

import QtQuick 2.15
import QtQuick.LocalStorage

import AuthOpenApi 1.0

QtObject {

    property string dbName: "SyncDB"
    property var db: LocalStorage.openDatabaseSync(dbName, "1.0", "The Example QML SQL!", 1000000); // 1 MB

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

                    console.log('REMOVE:', tableName);

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
}
