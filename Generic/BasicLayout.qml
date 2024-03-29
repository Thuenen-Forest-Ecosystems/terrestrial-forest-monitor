import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts

import AuthOpenApi
import Generic
import Layouts
import StaticData



Page {

    objectName: 'Layout'

    function _infoDialog(){
        console.log('open Dialog', Style.isDarkTheme);
        infoContactDialog.open()
    }

    GenericDialog {
        id: infoContactDialog
        anchors.centerIn: parent
        showLogo: true

        Item {
            height: 20
        }

        Label {
            font.pixelSize: 20
            font.weight: Font.Bold
            text: qsTr("Über diese App")
        }
        GenericDivider{ margin: 3}
        Label {
            width: parent.width
            wrapMode: Text.WordWrap
            text: qsTr("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")
        }

        Item {
            width: parent.width
            height: 20
        }

        Label {
            font.pixelSize: 20
            font.weight: Font.Bold
            text: qsTr("Ansprechpersonen")
        }
        GenericDivider{ margin: 3}

        ContentLoader{
            id: contentLoader
            url: 'qrc:/qt/qml/StaticData/contacts.json'
        }
        Repeater{
            model: contentLoader.model
            delegate: Column{
                Item {
                    height: 5
                }
                Label {
                    font.weight: Font.Bold
                    text: name
                }
                Label {
                    text: role
                }
                Label {
                    text: phone
                }
                Item {
                    height: 10
                }
            }
        }
    }

    header: ToolBar{
        TopBar {
            id: topBar
        }
    }

    RowLayout{

        anchors.fill: parent

        SideBar{
            id:sidebar
            Layout.minimumWidth: 50
            Layout.fillHeight: true
            bottomButtons: ListModel {
                ListElement {
                    code: "e55b"
                    icoColor: "#333"
                    onBtnClicked: () => _infoDialog()
                    tTip: "Karte öffnen"
                }
                ListElement {
                    code: "e94c"
                    icoColor: "#333"
                    onBtnClicked: () => _infoDialog()
                    tTip: "Info & Kontakte"
                }
            }
        }
        ColumnLayout{

            Breadcrumb{
                Layout.fillWidth: true
            }

            StackView {
                id: stackViewMain
                initialItem: "qrc:/qt/qml/Generic/pages/StartPage.qml"
                Layout.fillWidth: true
                Layout.fillHeight: true
            }
        }


    }

    Cove{
        x: sidebar.width
        bgColor: Material.primary
    }


}
