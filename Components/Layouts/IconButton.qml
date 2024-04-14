import QtQuick 2.12
import QtQuick.Controls 2.0

ToolButton {

    property color iconColor
    required property string codePoint
    required property string toolTip

    id: control

    contentItem: Label {

        text: String.fromCharCode("0x" + parent.codePoint)
        font.family: materialFont.name
        font.pixelSize: 15


        color: iconColor == "#000000" ? Material.foreground : iconColor

        horizontalAlignment: Text.AlignHCenter
        verticalAlignment: Text.AlignVCenter


    }

    ToolTip.delay: 1000
    ToolTip.timeout: 5000
    ToolTip.visible: hovered
    ToolTip.text: qsTr(toolTip)

    MouseArea {
        anchors.fill: parent
        cursorShape: Qt.PointingHandCursor
        onClicked: parent.clicked()
    }


    FontLoader {
        id: materialFont;
        source: "qrc:/qt/qml/Layouts/fonts/MaterialIcons.ttf"
    }
}
