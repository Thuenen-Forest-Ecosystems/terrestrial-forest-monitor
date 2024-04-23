import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import Layouts
import SyncOpenApi 1.0


ChildLayout{
    objectName: "Traktliste"
    breadcrumbStackView: stackViewMain

    property variant rows: []

    ColumnLayout{
        id: columnLayout
        anchors.fill: parent
        spacing: 0

        Label {
            id: name
            text: qsTr("Traktliste")
        }

        GenericDivider{margin: 0}

        MainContent{

            Layout.fillHeight: true
            Layout.fillWidth: true

            Component.onCompleted: {
                rows = SyncUtils.select("b3_tnr");
            }

            Repeater {
                model: rows
                delegate: GenericCard{
                    clicked: () =>{
                        console.log('clicked');
                        stackViewMain.push(
                            Qt.createComponent("qrc:/qt/qml/Routes/CI27/Ecken.qml").createObject(null, {"id": modelData.tnr}),
                            {
                                "id": modelData.tnr
                            },
                            StackView.Immediate
                        )
                    }
                    GenericLine{
                        
                        TableRowToLayout{
                            Layout.fillWidth: true
                            row: modelData
                        }
                        /*IconButton {
                            codePoint: "e5e1"
                            toolTip: ""

                            onClicked: function(e){
                                stackViewMain.push(
                                    Qt.createComponent("qrc:/qt/qml/Routes/CI27/Ecken.qml").createObject(null, {"id": modelData.tnr}),
                                    {
                                        "id": modelData.tnr
                                    },
                                    StackView.Immediate
                                )
                            }
                        }*/
                    }
                }
            }
            
        }
    }
}

