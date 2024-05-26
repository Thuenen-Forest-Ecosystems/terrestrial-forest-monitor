import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import QtCore

import Layouts
import SyncOpenApi 1.0


Item{
    //objectName: "Traktliste"
    //breadcrumbStackView: stackViewMain
    property bool loading: false

    property variant rows: []
    property var rowsDetails: []

    // TODO: Global Selection
    property string tableName: "b3_tnr"

    property alias settings: settings
    property bool isFilterVisible: false

    
    Component.onCompleted: {
        mapBtn.visible = true

        if(!rows.length){
            loading = true
            SyncOpenApi.getRows(tableName, function(data){
                rows = data
                loading = false
            })
        }
    }

    Settings {
        id: settings
        category: "Schema"
    }

    ColumnLayout{
        id: columnLayout
        anchors.fill: parent
        spacing: 0
       

        RowLayout{
            Layout.alignment: Qt.AlignHCenter
            Layout.maximumWidth: 900
            Layout.topMargin: 10
            Layout.leftMargin: 10
            Layout.rightMargin: 10
            
            Label{
                text: `Traktliste (${rows.length})`
                font.pixelSize: 20
                Layout.fillWidth: true
            }
            IconButton {
                codePoint: !isFilterVisible ? "e429" : "e5ce"
                toolTip: "Filter"
                badge: true
                onClicked: function(e){
                    isFilterVisible = !isFilterVisible
                }
            }
        }
        FilterRows{
            id: filterRows
            Layout.preferredWidth: columnLayout.width
            //Layout.fillWidth: true
            Layout.alignment: Qt.AlignHCenter
            visible: isFilterVisible
        }

        GenericDivider{margin: 0}


        MainContent{

            id: mainContent

            Layout.fillHeight: true
            Layout.fillWidth: true

            Rectangle{
                height: mainContent.height
                width: parent.width
                color: "transparent"
                visible: rows.length === 0
                Label{
                    Layout.fillWidth: true
                    text: `Keine Daten vorhanden.<br/>(${tableName})`
                    font.pixelSize: 16
                    anchors.centerIn: parent
                    horizontalAlignment: Text.AlignHCenter
                    verticalAlignment: Text.AlignVCenter
                    opacity: 0.5
                }
            }

            Repeater {
                visible: rows.length > 0
                model: rows
                delegate: GenericCard{
                    clicked: () =>{
                        if(!modelData['children']){
                            console.log('HAS NO CHIlDREN');
                            return
                        }

                        stackViewMain.push(
                            Qt.createComponent("qrc:/qt/qml/Layouts/GenericJsonObject.qml").createObject(null, {"rows": modelData['children']}),
                            {
                                "objectName": "Ecken",
                                "rows": modelData['children']
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

