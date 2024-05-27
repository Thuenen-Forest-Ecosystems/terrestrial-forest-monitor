import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import QtCore

import Layouts
import SyncOpenApi 1.0


Item{
    objectName: "Trakt: " + id.toString()
    property int id

    property variant rows: []
    property var rowsDetails: []

    property string parentTableName: "b3_tnr"
    property variant parentRows: []
    property var parentRowsDetails: []

    // TODO: Global Selection
    property string schemaName: "bwi_de_001_dev"
    property string tableName: "b3_ecke"

    property alias settings: settings

    Settings {
        id: settings
        category: "Schema"
    }

    Component.onCompleted: {
        parentRows = SyncUtils.select(parentTableName, `WHERE tnr = ${id}`);
        const parentRowsDetailsObject = JSON.parse(settings.value(schemaName));
        parentRowsDetails = Object.entries(parentRowsDetailsObject.properties.transectList.items.properties)

        rows = SyncUtils.select(tableName, `WHERE tnr = ${id} ORDER BY enr ASC`);
        const rowsDetailsObject = JSON.parse(settings.value(schemaName));
        rowsDetails = Object.entries(rowsDetailsObject.properties.eckenList.items.properties)
    }

    ColumnLayout{
        id: columnLayout
        anchors.fill: parent
        spacing: 0

        

        RowLayout{
            Layout.fillWidth: true
            Layout.alignment: Qt.AlignHCenter

            Item{
                width: 10
            }
            GenericCard{
                Layout.fillWidth: true
                headline: "Trakt: " + id.toString()
                GenericLine{
                    clip: true
                    TableRowToLayout{
                        Layout.fillWidth: true
                        row: parentRows[0]
                        details: parentRowsDetails
                    }
                }
            }
            Item{
                width: 10
            }
        }

       

        RowLayout{
            Layout.fillWidth: true
            Layout.alignment: Qt.AlignHCenter

            Item{
                width: 10
            }
            Label{
                Layout.fillWidth: true
                text: "Ecken"
                font.pixelSize: 20
                Layout.alignment: Qt.AlignHCenter
                Layout.maximumWidth: 700
            }
            IconButton {
                codePoint: "e429"
                toolTip: "Filter"

                onClicked: function(e){
                }
            }
            Item{
                width: 10
            }
        }

        GenericDivider{
            margin: 0
        }

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
                            details: rowsDetails
                        }
                    }
                }
            }
        }
    }
}

