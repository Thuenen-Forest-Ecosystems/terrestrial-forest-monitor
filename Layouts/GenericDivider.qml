import QtQuick 6.2
import QtQuick.Layouts 6.2

ColumnLayout {

    property int margin: 10

    width: parent.width
    spacing: 0

    Item{
        height: margin
        width: parent.width
    }
    Rectangle{
        height: 1
        width: parent.width
        color: "#777"
        opacity: 0.2
        Layout.fillWidth: true
    }
    Item{
        height: margin
        width: parent.width
    }
}
