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
    //property alias loginDialogPopup: loginDialogPopup

    property alias mapBtn: mapBtn

    function _infoDialog(){
        infoContactDialog.open()
    }

    GenericDialog {
        id: infoContactDialog
        anchors.centerIn: parent
        showLogo: true

        Item {
            width: parent.width
            height: 20
        }

        Label {
            font.pixelSize: 20
            font.weight: Font.Bold
            text: qsTr("Über diese Apps")
        }

        GenericDivider{ margin: 0}

        GridLayout{

            columns: 2
            columnSpacing: 10

            Label {
                text: "Version:"
            }
            Component.onCompleted: {
                console.log(JSON.stringify(Qt.application, null, 2));
            }
            Label {
                text: Qt.application.version || "not defined"
                font.weight: Font.Bold
            }
        }

        Item {
            width: parent.width
            height: 20
        }

        Label {
            font.pixelSize: 20
            font.weight: Font.Bold
            text: qsTr("Bereitgestellt von")
        }
        GenericDivider{ margin: 0}
        Label {
            text: '<b>Institut für Waldökosysteme<br/>'
        }
        Label {
            text: 'Johann Heinrich von Thünen-Institut'
        }
        Label {
            text: '<a href="https://www.thuenen.de/impressum" target="_blank">Impressum</a>'
            Layout.fillWidth: true
            wrapMode: Text.WordWrap
            onLinkActivated: (link) => {
                Qt.openUrlExternally(link)
            }
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
    GenericDialog{
        id: validationdialog
        anchors.centerIn: parent
        showLogo: false
        
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

                visible: true

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
                id: fullscreenBtn
                visible: Qt.platform.os === "android" || Qt.platform.os === "ios" || Qt.platform.os === "tvos" || Qt.platform.os === "qnx" ? false : true
                codePoint: "e5d0"
                iconColor: "#333"
                toolTip: "Fullscreen"

                onClicked: function(e){

                    if(applicationWindow.visibility === 2){
                        applicationWindow.visibility = 5
                        fullscreenBtn.codePoint = "f1cf"
                    }else{
                        applicationWindow.visibility = 2
                        fullscreenBtn.codePoint = "e5d0"
                    }
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
        ChildLayout{
            Layout.fillWidth: true
            Layout.fillHeight: true

            breadcrumbStackView: stackViewMain

            Item{
                anchors.fill: parent
                StackView {
                    anchors.fill: parent

                    id: stackViewMain
                    initialItem: Page{
                        objectName: "Wellcome"
                        id:inner
                    }
                }
            }
        }
        
        /*LoginDialog {
            id: loginDialogPopup
            anchors.centerIn: parent
        }*/

    }

    Cove{
        x: sidebar.width
        bgColor: Material.primary
    }


}
