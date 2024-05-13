import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import Layouts

ColumnLayout{
    Flow{
        id: flow
        spacing: 10
        Layout.fillWidth: true
        Repeater{
            model: 50
            Rectangle{
                width: 50
                height: 50
                color: "blue"
            }
        }
    }
    
    RowLayout{
        Layout.alignment: Qt.AlignRight
       
        GenericButton{
            Layout.rightMargin: 20
            Layout.bottomMargin: 10
            buttonText: "zurücksetzen"
            buttonIcon: "ea76"
            fn: () => {
                console.log("zurücksetzen")
            }
            raised: true
        }
    }
}