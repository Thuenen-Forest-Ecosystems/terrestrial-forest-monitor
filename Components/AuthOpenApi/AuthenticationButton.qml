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
