import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts

import AuthOpenApi
import Generic
import Layouts
import StaticData



Page {

    default property alias data: inner.children
    property alias stackViewMain: stackViewMain

    property alias mapBtn: mapBtn

    function _infoDialog(){
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

        spacing: 0

        anchors.fill: parent

        SideBar{
            id:sidebar
            Layout.minimumWidth: 50
            Layout.fillHeight: true


            IconButton {
                id: mapBtn

                property string mapCodePoint: "e2db"
                property bool mapState: false


                visible: false

                codePoint: mapState ? mapCodePoint : "e5cd"
                iconColor: "#333"
                toolTip: "Karte öffnen"

                signal setVisibility(bool visible)
                signal mapStateChange(bool mapState)

                onSetVisibility: function(visible){
                    mapBtn.visible = visible
                }
                onMapStateChange: function(newState){
                    mapState = newState
                }

            }
            IconButton {
                codePoint: "e94c"
                iconColor: "#333"
                toolTip: "Info & Kontakte"

                onClicked: function(e){
                    _infoDialog(e)
                }
            }

        }
        StackView {
            id: stackViewMain
            initialItem: Page{
                objectName: "Wellcome"
                id:inner
            }
            Layout.fillWidth: true
            Layout.fillHeight: true
        }

    }

    Cove{
        x: sidebar.width
        bgColor: Material.primary
    }


}
