import QtQuick.LocalStorage


export function tables(value) {
    db = LocalStorage.openDatabaseSync(localOnlyDBName, "1.0", "The Example QML SQL!", 1000000); // 1 MB

    const tablesList = [];
    db.transaction(
        function(tx) {
            const sqlStringTables = `SELECT name FROM sqlite_schema;`;
            var rs2 = tx.executeSql(sqlStringTables);
            for(var i = 0; i < rs2.rows.length; i++) {
                tablesList.push(rs2.rows.item(i).name)
            }
        }
    )
    return tablesList;
}
export function dropTables(value) {
    console.log("Call dropTables() :");
}
