import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2

import Generic
import Layouts

Page {

    objectName: 'Settings'

    id: settingsPage

    function _onClicked(attr){
        stackViewStart.pop(StackView.Immediate)
    }

    header: ToolBar{
        BackBar {
            id: backBar
            title: "Settings"
        }
    }


    MainContent{

        GenericCard{
            headline: qsTr("Berechtigungen")
            GenericLine{
                title: qsTr("Rollendefinition")
                description: qsTr("Ändere die Berechtigungen der Aufnahmetrupps")
                IconButton {
                    codePoint: "e5e1"
                    toolTip: "Schließen"

                    onClicked: function(e){
                        console.log('weiter')
                    }
                }
            }
        }



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
            GenericDivider{}
            GenericLine{
                title: "Title & Subtitle & Long description & Leading Icon"
                subTitle: "Subtitle2"
                description: qsTr("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")
                leadingCodePoint: "e88e"
            }
        }

    }
}
