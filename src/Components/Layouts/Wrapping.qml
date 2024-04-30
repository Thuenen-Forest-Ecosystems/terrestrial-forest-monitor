import QtQuick 2.15
import QtQuick.Layouts

Item {
    anchors.fill: parent


    Column{
        anchors.fill: parent

        Text {
            id: name
            text: qsTr("Wrapping Items")
        }

        Flow{
            width: parent.width

            spacing: 10



            Repeater{
                model: 13
                delegate: Rectangle{
                    width: 100
                    height: 100
                    color: "blue"
                }
            }
        }
        Text {
            id: name1
            text: qsTr("next Wrapping Items")
        }
    }
}
