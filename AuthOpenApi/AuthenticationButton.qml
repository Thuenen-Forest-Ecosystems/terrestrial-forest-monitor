import QtQuick 6.2
import QtQuick.Controls 6.2
import QtCore
import QtQuick.Controls.Material
import QtQuick.Layouts

import Layouts

RowLayout {

    // -- Properties

    property bool isLoggedIn: false
    property alias settings: settings
    property string userName: "Anonym";

    property bool raised: false


    //width: childrenRect.width
    //height: childrenRect.height

    // -- Methods

    function authStateChange(){
        if(settings){
            isLoggedIn = settings.value('activeToken') ? true : false
            if(isLoggedIn)
                userName = settings.value('activeUser')
        }

    }

    Component.onCompleted: {
        AuthState.addListener(authStateChange)
        authStateChange()
    }

    // -- Layout

    /*Button {
        id:loginBtn
        text: qsTr('ANMELDEN')
        visible: !isLoggedIn
        icon.source: "qrc:/qt/qml/Layouts/icons/account_circle_FILL0_wght400_GRAD0_opsz24.svg"
        Material.background: Material.primary
        contentItem: Text {
            text: loginBtn.text
            font: loginBtn.font
            color: raised ? loginBtn.color : Material.primary
            horizontalAlignment: Text.AlignHCenter
            verticalAlignment: Text.AlignVCenter
            elide: Text.ElideRight
        }
        background: Rectangle {
            implicitWidth: 100
            border.width: raised ? 0 : 2
            border.color: Material.primary
            color: "#333"
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
        icon.source: "qrc:/qt/qml/Layouts/icons/account_circle_FILL0_wght400_GRAD0_opsz24.svg"
        visible: isLoggedIn
        flat: true
        Material.background: Material.primary
        contentItem: Text {
            text: logoutBtn.text
            font: logoutBtn.font
            color: "#333"
        }
        Connections {
            function onClicked(){
                loginDialogPopup.open()
            }
        }
    }*/

    GenericButton{
        visible: !isLoggedIn
        Layout.alignment: Qt.AlignVCenter
        buttonText: "anmelden"
        buttonToolTip: "ANMELDEN / ABMELDEN"
        buttonIcon: "e853"
        fn: (e) => {
            console.log(e);
            loginDialogPopup.open();
        }
    }

    GenericButton{
        visible: isLoggedIn
        Layout.alignment: Qt.AlignVCenter
        buttonText: userName
        buttonToolTip: "ANMELDEN / ABMELDEN"
        buttonIcon: "e9ba"
        fn: (e) => {
            console.log(e);
            loginDialogPopup.open();
        }
    }

    Settings {
        id: settings
        category: "User"
    }
}
