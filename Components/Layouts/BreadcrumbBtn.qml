import QtQuick 6.2
import QtQuick.Controls 6.2

Button {
    id: button

    contentItem: Text {
        text: button.text
        font.pixelSize: enabled ? 12 : 16
        font.weight: !enabled ? Font.Bold : Font.Normal
        opacity: 1.0
        color: button.down ? "#777" : "#333"
        horizontalAlignment: Text.AlignHCenter
        verticalAlignment: Text.AlignVCenter
        elide: Text.ElideRight
    }

    background: Rectangle {
        implicitHeight: 15
        color: button.down ? "#d6d6d6" : "#f6f6f6"
        radius: 20
        opacity: enabled ? 0.7 : 0
    }
}
