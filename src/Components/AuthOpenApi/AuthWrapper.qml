import QtQuick 6.2
import QtCore

import Layouts 1.0

Item {

    property bool isLoggedIn: false;
    property alias settings: settings
    property string token

    function authStateChange(){
        token = settings.value('activeToken')
        if(settings)
            isLoggedIn = settings.value('activeToken') ? true : false
    }
    function logout(){
        if(settings){
            settings.setValue('activeToken', null)
            AuthState.latestLogin += 1;
        }
    }

    function executeIfLoggedIn(fn){
        if(!isLoggedIn){
            loginDialogPopup.open()
            loginDialogPopup.onLoggedIn.connect(() => {
                if(isLoggedIn) fn();
            });
        }else fn();
    }

    Component.onCompleted: {
        AuthState.addListener(authStateChange)
        authStateChange();
    }

    Settings {
        id: settings
        category: "User"
    }

    Text {
        text: qsTr(isLoggedIn ? "you are logged in" : "NOT logged in")
    }

}
