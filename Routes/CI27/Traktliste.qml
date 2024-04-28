import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import QtCore

import Layouts
import SyncOpenApi 1.0


ChildLayout{
    objectName: "Traktliste"
    breadcrumbStackView: stackViewMain


    property variant rows: []
    property var rowsDetails: []

    // TODO: Global Selection
    property string schemaName: "bwi_de_001_dev"
    property string tableName: "b3_tnr"

    property alias settings: settings

    Component.onCompleted: {
        rows = SyncUtils.select(tableName, `ORDER BY tnr ASC`);
        const rowsDetailsObject = JSON.parse(settings.value(schemaName));
        rowsDetails = Object.entries(rowsDetailsObject.properties.transectList.items.properties)
    }

    ColumnLayout{
        id: columnLayout
        anchors.fill: parent
        spacing: 0

        Settings {
            id: settings
            category: "Schema"
        }

        RowLayout{
            Layout.fillWidth: true
            Layout.alignment: Qt.AlignHCenter

            Item{
                width: 10
            }
            Label{
                Layout.fillWidth: true
                text: "Traktliste"
                font.pixelSize: 20
                Layout.alignment: Qt.AlignHCenter
                Layout.maximumWidth: 700
            }
            IconButton {
                codePoint: "e429"
                iconColor: "#333"
                toolTip: "Filter"

                onClicked: function(e){
                }
            }
            Item{
                width: 10
            }
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
                            details: rowsDetails
                            tableName: tableName
                        }
                    }
                }
            }
        }
    }
}

