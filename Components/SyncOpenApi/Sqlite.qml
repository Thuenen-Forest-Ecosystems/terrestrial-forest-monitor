pragma Singleton

import QtQuick 2.15
import QtQuick.LocalStorage

QtObject {

    


    property string dbName: "SyncDB"
    property var db: LocalStorage.openDatabaseSync(dbName, "1.0", "The Example QML SQL!", 1000000); // 1 MB

    function testToken(){
        db.transaction(
            function(tx) {
                const sqlString = `CREATE TABLE IF NOT EXISTS testToken (id INTEGER PRIMARY KEY, token TEXT);`;
                tx.executeSql(sqlString);
            }
        )
        return 'testToken';
    }
    function tables(fn){
        const tables = [];
        db.transaction(
            function(tx) {
                console.log(tx);
                const sqlStringTables2 = `SELECT name FROM sqlite_schema;`;
                var rs2 = tx.executeSql(sqlStringTables2);
                for(var i = 0; i < rs2.rows.length; i++) {

                    const tableName = rs2.rows.item(i).name;

                    const sqlStringDrop = `SELECT COUNT(*) FROM "${tableName}";`;
                    const res = tx.executeSql(sqlStringDrop);

                    console.log(JSON.stringify(res.rows.item(0)['COUNT(*)']));

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
