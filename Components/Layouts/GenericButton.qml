import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2


Button {

    id: root

    required property string buttonText;
    property string buttonIcon;
    property string buttonToolTip
    required property var fn;
    property bool raised: false
    property bool buttonEnabled: true
    property bool isBusy: false

    property string badge

    padding: 1
    enabled: buttonEnabled


    MouseArea {
        anchors.fill: parent
        cursorShape: Qt.PointingHandCursor
        onClicked: root.clicked()
    }

    contentItem: RowLayout{
        spacing: 10
        Text {
            Layout.alignment: Qt.AlignVCenter
            text: buttonText.toUpperCase()
            color: raised ? "#333" : Material.primary
            horizontalAlignment: Text.AlignHCenter
            verticalAlignment: Text.AlignVCenter
            elide: Text.ElideRight
        }
        Icon{
            visible: buttonIcon && !isBusy
            Layout.alignment: Qt.AlignVCenter
            codePoint: buttonIcon
            iconColor: raised ? "#333" : Material.primary
            size: 20
        }
        BusyIndicator {
            implicitWidth: 25
            implicitHeight: 25
            running: isBusy
            visible: isBusy
            Material.accent: raised ? "#333" : Material.primary

        }

    }

    background: Rectangle {
        implicitWidth: 100
        border.width: raised ? 0 : 2
        border.color: Material.primary
        color: raised ? buttonEnabled ? Material.primary : "#ddd" : "#333"
        radius: 40
    }

    /*ToolTip.delay: 1000
    ToolTip.timeout: 5000
    ToolTip.visible: hovered
    ToolTip.text: buttonToolTip ? buttonToolTip : buttonText.toUpperCase()*/

    Connections {
        function onClicked(e){
            fn(e)
        }
    }

    FontLoader {
        id: materialFont;
        source: "qrc:/qt/qml/Layouts/fonts/MaterialIcons.ttf"
    }

    // Badge
    Rectangle {
        visible: badge
        width: 20
        height: 20
        color: "#f0f"
        radius: 20

        Label{
            text: badge.toString()

        }
    }

}
