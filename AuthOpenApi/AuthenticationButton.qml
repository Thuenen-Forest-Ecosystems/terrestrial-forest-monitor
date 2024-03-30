import QtQuick 6.2
import QtQuick.Controls 6.2
import QtCore
import QtQuick.Controls.Material
import QtQuick.Layouts

RowLayout {

    // -- Properties

    property bool isLoggedIn: false
    property alias settings: settings
    property string userName: "Anonym";

    property bool raised: false


    width: childrenRect.width
    height: childrenRect.height

    // -- Methods

    Component.onCompleted: {
        AuthState.addListener(authStateChange)
        authStateChange()
    }

    function authStateChange(){
        if(settings){
            isLoggedIn = settings.value('activeToken') ? true : false
            if(isLoggedIn)
                userName = settings.value('activeUser')
        }

    }

    // -- Layout

    Button {
        id:loginBtn
        text: qsTr("ANMELDEN")
        visible: !isLoggedIn
        flat: true
        icon.source: "account_circle_FILL0_wght400_GRAD0_opsz24.svg"
        Material.background: Material.primary
        contentItem: Text {
            text: loginBtn.text
            font: loginBtn.font
            //opacity: enabled ? 1.0 : 0.3
            color: raised ? loginBtn.color : Material.primary
            horizontalAlignment: Text.AlignHCenter
            verticalAlignment: Text.AlignVCenter
            elide: Text.ElideRight
        }
        background: Rectangle {
            implicitWidth: 100
            implicitHeight:  25
            border.width: raised ? 0 : 2
            border.color: Material.primary
            color: raised ? Material.primary : "White"
            radius: 40
        }
        Connections {
            function onClicked(){
                loginDialogPopup.open()
            }
        }
    }
    Button {
        id:logoutBtn
        text: qsTr(userName)
        icon.source: "account_circle_FILL0_wght400_GRAD0_opsz24.svg"
        visible: isLoggedIn
        flat: true
        Material.background: Material.primary
        Connections {
            function onClicked(){
                loginDialogPopup.open()
            }
        }
    }

    Settings {
        id: settings
        category: "User"
    }
}
