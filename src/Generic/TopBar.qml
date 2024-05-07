import QtQuick 6.2
import QtQuick.Layouts 6.2
import QtQuick.Controls 6.2
import QtCore

import AuthOpenApi
import SyncOpenApi
import Layouts

RowLayout {

    property alias settings: settings

    anchors.fill: parent
    spacing: 0

    height: 100


    Item{
        width: 377/3
        height: 151/3
        Image {
            id: logo
            source: "qrc:/qt/qml/Layouts/images/THUENEN_SCREEN_Black.svg"
            anchors.fill: parent
            fillMode: Image.PreserveAspectCrop
            sourceSize: Qt.size(377, 151)
            smooth: false
            antialiasing: false
        }
        MouseArea{
            anchors.fill: parent
            onClicked:{

                let stackView = stackViewStart
                let item = stackView.get(0);
                stackView.pop(item, StackView.Immediate);

                stackView = stackViewMain
                item = stackView.get(0);
                stackView.pop(item, StackView.Immediate);
            }
        }
    }

    Label {
        Layout.fillWidth: true
    }

    Settings {
        id: settings
        category: "User"
    }
    AuthenticationButton{
        Layout.alignment: Qt.AlignVCenter
    }

    IconButton {
        Layout.alignment: Qt.AlignVCenter

        codePoint: "e8b8"
        iconColor: "#333"
        toolTip: "Einstellungen"

        onClicked: function(e){
            stackViewStart.push("qrc:/qt/qml/Routes/CI27/Einstellungen.qml", StackView.Immediate)
        }
    }

    HostIndicator {
        buttonIconColor: "#333"
    }

}
