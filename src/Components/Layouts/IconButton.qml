import QtQuick 2.12
import QtQuick.Controls 2.0

ToolButton {

    property color iconColor
    required property string codePoint
    required property string toolTip
    property bool badge: false

    id: control

    contentItem: Label {

        text: String.fromCharCode("0x" + parent.codePoint)
        font.family: materialFont.name
        font.pixelSize: 20


        color: iconColor == "#000000" ? Material.foreground : iconColor

        horizontalAlignment: Text.AlignHCenter
        verticalAlignment: Text.AlignVCenter


    }
    Rectangle {
        id: badge
        width: 6
        height: 6
        radius: width / 2
        color: "red"
        visible: control.badge
        anchors.right: control.right
        anchors.top: control.top
        anchors.rightMargin: width
        anchors.topMargin: height
    }

    ToolTip.delay: 1000
    ToolTip.timeout: 5000
    ToolTip.visible: hovered
    ToolTip.text: qsTr(toolTip || "")

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
