import QtQuick 2.15

// https://stackoverflow.com/questions/42896706/parsing-json-to-listmodel
// https://stackoverflow.com/questions/35040737/parse-json-to-listview-in-qml

Item {

    property alias tableModel:tableModel


    ListView {

        anchors.fill: parent


        model: ListModel { id: tableModel}
        delegate: Text { text: `${name}: ${sql}` }
    }
}
