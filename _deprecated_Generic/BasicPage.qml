import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

import AuthOpenApi
import SyncOpenApi
import Layouts

Page {
    property var component
    property var sprite
    required property string childElement
    required property string label


    property int contentPadding: 0

    id: root

    function createSpriteObjects(qmlFile) {

        component = Qt.createComponent(qmlFile);

        if (component.status == Component.Ready){
            finishCreation();
        }else{
            component.statusChanged.connect(finishCreation);
        }
    }
    function finishCreation() {

        if (component.status === Component.Ready) {
            sprite = component.createObject(placeHolder, {});
            if (sprite === null) {
                // Error Handling
                console.log("Error creating object");
            }else{
                console.log("Success creating object", sprite.height);
            }
        } else if (component.status === Component.Error) {
            // Error Handling
            console.log("Error loading component:", component.errorString());
        }
    }

    header: ToolBar{

        Component.onCompleted: createSpriteObjects(childElement);

        BackBar {
            id: backBar
            title: label
        }
    }





    ScrollView {

        anchors.fill: parent

        ScrollBar.vertical.policy: ScrollBar.AlwaysOn

        //contentWidth: wrapper.width; contentHeight: wrapper.height

        ColumnLayout{

            //id: wrapper

            width: root.width

            spacing: 20

            Rectangle{
                height: 20
            }

            Pane {

                Layout.alignment: Qt.AlignHCenter

                padding: contentPadding



                Material.elevation: 6
                //anchors.centerIn: root

                //implicitHeight: sprite.height + contentPadding *2
                implicitWidth: root.width/1.5
                //implicitHeight: sprite.width + contentPadding *2
                implicitHeight: root.height/1.5



                Item{
                    id: placeHolder
                    anchors.fill: parent
                }



            }

            Item{
                Layout.alignment: Qt.AlignHCenter
                width: 300
                Label {
                    id:headline
                    text: qsTr(label)
                }

            }



            Rectangle{
                height: 20
            }
        }

    }
}
