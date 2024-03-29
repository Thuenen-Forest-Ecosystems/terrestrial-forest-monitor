import QtQuick 6.2
import QtQuick.Layouts 6.2

ColumnLayout {

    property int margin: 10

    width: parent.width

    Rectangle{
        height: margin
    }
    Rectangle{
        height: 1
        width: parent.width
        color: "#777"
        opacity: 0.2
        Layout.fillWidth: true
    }
    Rectangle{
        height: margin
    }
}
