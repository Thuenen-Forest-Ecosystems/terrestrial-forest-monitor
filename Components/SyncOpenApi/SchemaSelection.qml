import QtQuick 6.2
import QtQuick.Controls
import QtQuick.Layouts

ComboBox {
    currentIndex: 2
    model: ListModel {
        id: cbItems
        ListElement { text: "Banana"; color: "Yellow" }
        ListElement { text: "Apple"; color: "Green" }
        ListElement { text: "Coconut"; color: "Brown" }
    }
    width: 200
    onCurrentIndexChanged: console.debug(cbItems.get(currentIndex).text + ", " + cbItems.get(currentIndex).color)
}