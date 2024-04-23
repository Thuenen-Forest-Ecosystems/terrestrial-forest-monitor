import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import Layouts
import SyncOpenApi 1.0


ChildLayout{
    objectName: "Trakt: " + id.toString()
    breadcrumbStackView: stackViewMain

    property int id
    property variant rows: []

    Component.onCompleted: {
        rows = SyncUtils.select("b3_ecke", `WHERE tnr = ${id} ORDER BY enr ASC`);
    }

    ColumnLayout{
        id: columnLayout
        anchors.fill: parent
        spacing: 0

        Label {
            id: headline
            text: qsTr("Trakt: " + " " + id.toString())
        }

        GenericDivider{margin: 0}

        MainContent{

            Layout.fillHeight: true
            Layout.fillWidth: true

            Repeater {
                model: rows
                delegate: GenericCard{
                    clicked: () =>{
                        stackViewMain.push(
                            Qt.createComponent("qrc:/qt/qml/Routes/CI27/Ecke.qml").createObject(null, {"id": modelData.enr}),
                            {
                                "id": modelData.enr
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
                            toolTip: "s"

                            onClicked: function(e){
                                stackViewMain.push(
                                    Qt.createComponent("qrc:/qt/qml/Routes/CI27/Ecke.qml").createObject(null, {"id": modelData.enr}),
                                    {
                                        "id": modelData.enr
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

