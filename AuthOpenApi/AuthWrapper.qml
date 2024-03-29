import QtQuick 6.2
import QtCore

Item {

    property bool isLoggedIn: false;
    property alias settings: settings

    function authStateChange(){
        if(settings)
            isLoggedIn = settings.value('activeToken') ? true : false
    }
    function logout(){
        if(settings){
            settings.setValue('activeToken', null)
            AuthState.latestLogin += 1;
        }
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
