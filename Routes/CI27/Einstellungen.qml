import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import Layouts
import SyncOpenApi

Page {
    objectName: "Einstellungen"
    property variant userTables: []


    function refreshTables(){
        const tables = Sqlite.tables()

        userTables = tables
    }

    BackPageLayout{

        anchors.fill: parent

        MainContent{

            anchors.fill: parent

            GenericCard{
                headline: qsTr("Layout")

                GenericLine{
                    title: qsTr("Energie-Modus")
                    description: qsTr("Wähle den dunklen Modus um den Akkuverbrauch des Gerätes zu reduzieren.")
                    leadingCodePoint: "ec1a"
                    Switch {

                        id: themeSwitch
                        checked: false
                        Component.onCompleted: {
                            themeSwitch.checked = Style.isDarkTheme
                        }
                        onPositionChanged:{
                            Style.toggleTheme(themeSwitch.checked);
                        }
                    }
                }
            }

            GenericCard{
                headline: qsTr("Admin")

                GenericLine{
                    title: "Select DB Schema"
                    description: qsTr("Wähle ein Schema.")
                    leadingCodePoint: "e9f4"
                    SchemaSelection{
                        Layout.minimumWidth: 200
                    }

                }

                GenericDivider{}

                GenericLine{
                    Component.onCompleted: {
                        refreshTables();
                    }
                    title: qsTr(userTables.length + " Datenbanken")
                    description: qsTr("Für Nutzer:")
                    IconButton {
                        codePoint: "e872"
                        toolTip: "Löschen"
                        onClicked: function(e){
                            Sqlite.dropTables(userTables.map(x => x.name));
                            refreshTables();
                            //stackViewStart.push("qrc:/qt/qml/Routes/CI27/settings/Privileges.qml", StackView.Immediate)

                        }
                    }
                }
                GenericDivider{}

                Repeater{
                    model: userTables
                    delegate: Item{
                        width: parent.width
                        height: childrenRect.height
                        GenericLine{
                            title: modelData.name.split('$')[2]
                            subTitle: modelData.name.split('$')[1]
                            description: modelData.rowsCount + " Rows"
                            leadingCodePoint: "e88e"
                        }
                    }
                }
            }
        }
    }
}
