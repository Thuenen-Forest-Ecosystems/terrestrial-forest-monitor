import QtQuick 6.2
import QtQuick.Layouts 6.2
import QtQuick.Controls 6.2
import QtCore

import AuthOpenApi
import SyncOpenApi
import Layouts

RowLayout {

    property alias settings: settings
    property var activeToken: settings.value('activeToken')

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
    //

    IconButton {
        id: fullscreenBtn
        visible: Qt.platform.os === "android" || Qt.platform.os === "ios" || Qt.platform.os === "tvos" || Qt.platform.os === "qnx" ? false : true
        codePoint: "e5d0"
        iconColor: "#333"
        toolTip: "Fullscreen"

        onClicked: function(e){

            console.log(Qt.platform.os);

            if(applicationWindow.visibility === 2){
                applicationWindow.visibility = 5
                fullscreenBtn.codePoint = "f1cf"
            }else{
                applicationWindow.visibility = 2
                fullscreenBtn.codePoint = "e5d0"
            }
        }
    }

    IconButton {
        codePoint: "e8b8"
        iconColor: "#333"
        toolTip: "Einstellungen"

        onClicked: function(e){
            stackViewStart.push("qrc:/qt/qml/Pages/CI27/Einstellungen.qml", StackView.Immediate)
        }
    }


}
