import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2

import Layouts 1.0
import Generic 1.0


Page {

    objectName: "BackPageLayout"

    default property alias data: inner.children
    property StackView breadcrumbStackView

    property bool showMap: false
    property bool useMap: true


    ColumnLayout{
        anchors.fill: parent
        spacing: 0

        Breadcrumb{
            stackView: breadcrumbStackView

            Layout.fillWidth: true
            Layout.preferredHeight: childrenRect.height
        }

        GridLayout{

            Layout.fillHeight: true
            Layout.fillWidth: true

            rows: 1
            columns: 3

            rowSpacing: 0
            columnSpacing: 0

            Rectangle{
                id: mapWrapper

                visible: useMap

                Component.onCompleted: {
                    if(mapBtn) mapBtn.setVisibility(true)
                    console.log(showMap.mapState);
                }
                Component.onDestruction: if(mapBtn) mapBtn.setVisibility(false)

                Layout.fillHeight: true
                Layout.preferredWidth: 0
                color: "#888"

                clip: true

                Text {
                    text: qsTr("MAP")
                    anchors.centerIn: parent
                }

                Connections {
                    target: mapBtn
                    function onClicked(){
                        showMap = !showMap
                        mapBtn.mapStateChange(showMap)
                    }
                }

                states: State {
                    name: "moved";
                    when: !showMap ? true : showMap == false
                    PropertyChanges { target: mapWrapper; Layout.preferredWidth: 300; }
                }
                transitions: Transition {
                    NumberAnimation {
                        properties: "Layout.preferredWidth";
                        easing.type: Easing.InOutCubic;
                        duration: 300;
                    }
                }
            }
            /*Rectangle{
                width: 10
                Layout.fillHeight: true
                color: "#777"
            }*/

            Item{
                id: inner
                Layout.fillHeight: true
                Layout.fillWidth: true
            }
        }


    }
}
