import QtQuick 6.2
import QtQuick.Layouts 6.2
import QtQuick.Controls 6.2
import QtCore

import Layouts

RowLayout {

    required property string title

    anchors.fill: parent

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


    IconButton {
        codePoint: "e5cd"
        iconColor: "#333"
        toolTip: "Schließen"

        onClicked: function(e){
            stackViewStart.pop(StackView.Immediate)
        }
    }
}
