import QtQuick 2.7
import Layouts
import QtQuick.Controls


// https://fonts.google.com/icons

Item {
    id: root

    property int size: 24
    required property string codePoint
    property color iconColor

    width: size
    height: size

     anchors.horizontalCenter : parent.horizontalCenter


    Label {
        anchors.fill: parent

        font.family: materialFont.name
        font.pixelSize: height

        color: parent.iconColor == "#000000" ? Material.foreground : iconColor

        text: String.fromCharCode("0x" + codePoint)
    }

    FontLoader {
        id: materialFont;
        source: "qrc:/qt/qml/Layouts/fonts/MaterialIcons.ttf"
    }
}


