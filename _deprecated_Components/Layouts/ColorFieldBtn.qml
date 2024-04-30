import QtQuick 6.2
import QtQuick.Controls 6.2

Button {
    property color bgColor

    id: button

    flat: true
    height: parent.height

    MouseArea {
        anchors.fill: parent
        cursorShape: Qt.PointingHandCursor
        onClicked: button.clicked()
    }

    contentItem: Text {
        text: button.text
        font.pixelSize: 14
        font.weight: Font.Bold
        opacity: 1.0
        color: "#fff"
        elide: Text.ElideRight
        padding: 0

    }

    background: Rectangle {
        height: parent.height
        color: bgColor
        opacity: button.hovered ? 0.8 : button.down ? 0.6 : 1
    }
}
