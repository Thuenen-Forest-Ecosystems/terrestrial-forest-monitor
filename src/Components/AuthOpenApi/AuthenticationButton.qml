import QtQuick 6.2
import QtQuick.Controls 6.2
import QtCore
import QtQuick.Controls.Material
import QtQuick.Layouts

import Layouts 1.0

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
        buttonToolTip: "ANMELDEN"
        buttonIcon: "e853"
        fn: (e) => {
            loginDialogPopup.open();
        }
    }

    GenericButton{
        visible: isLoggedIn
        Layout.alignment: Qt.AlignVCenter
        buttonText: userName
        buttonToolTip: "ABMELDEN"
        buttonIcon: "e9ba"
        fn: (e) => {
            loginDialogPopup.open();
            loginDialogPopup.onLoggedOut.connect(() => {
                stackViewMain.pop(StackView.Immediate);
            });
        }
    }

    Settings {
        id: settings
        category: "User"
    }
}
