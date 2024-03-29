import QtQuick 2.15
import QtQuick.LocalStorage

SyncTablesForm {

    required property string dbName
    property var db
    property string table






    Component.onCompleted: {
        db = LocalStorage.openDatabaseSync(dbName, "1.0", "The Example QML SQL!", 100000000); // 100 MB
        getAllTables();
    }

    function getAllTables(){

        const sqLiteString = `SELECT * FROM sqlite_master WHERE type='table'`;

        db.transaction(
            function(tx) {
                var rs = tx.executeSql(sqLiteString);
                for (var i = 0; i < rs.rows.length; i++) {
                    tableModel.append(rs.rows.item(i))
                }
            }
        )
    }
}
