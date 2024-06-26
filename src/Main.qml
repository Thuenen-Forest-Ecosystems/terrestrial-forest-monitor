
import QtQuick 6.2
import QtQuick.Controls.Material

import QtCore

import Layouts
import QtQuick.LocalStorage
import SyncOpenApi
import AuthOpenApi


ApplicationWindow {

    property real theme: Material.Dark
    property string themeBackground: Material.background
    property alias sessionSettings: sessionSettings

    id: applicationWindow
    visible: true


    // Defined in main.cpp
    title: qsTr(Qt.application.displayName)


    Material.theme: theme
    Material.primary: "#C3E399"
   // Material.variant: "Dense"
    Material.accent: "#78BE1E"
    Material.background: themeBackground


    minimumWidth: 200
    minimumHeight: 100

    width: 1000
    height: 400

    FontLoader {
        id: defaultFont
        source: "qrc:/qt/qml/Layouts/fonts/calibri.ttf"
        onStatusChanged: console.log(loader.status)
    }


    Connections{
        target: Style
        function onThemeChanged(newTheme) {
            theme = newTheme
            themeBackground = Style.isDarkTheme ? "#333" : "#eee"
        }
        Component.onCompleted:{
            theme = Style.isDarkTheme
            themeBackground = Style.isDarkTheme ? "#333" : "#eee"
        }
    }


    StackView {
        id: stackViewStart
        initialItem: "qrc:/qt/qml/Routes/wellcome.qml"
        anchors.fill: parent
    }


    Drawer {
        id: drawer
        width: 200
        height: applicationWindow.height
        dim: false
        interactive: true

        Label {
            text: "Content goes here!"
            anchors.centerIn: parent
        }
    }

    GenericToastManager {
        id: toast
    }
    LoginDialog {
        id: loginDialogPopup
        anchors.centerIn: parent
    }

    // Remove Settings
    onClosing: {

        const token = sessionSettings.value('activeToken')

        if(!token) return;

        const db = LocalStorage.openDatabaseSync("LocalOnlyDB", "1.0", "The Example QML SQL!", 1000000);

        let user = {};
        db.transaction(
            function(tx) {
                var rs = tx.executeSql(`SELECT * FROM USERS WHERE token in ( ? )`, [token]);
                for (var i = 0; i < rs.rows.length; i++) {
                    user = rs.rows[i]
                    break
                }
            }
        )

        if(!user.autoLogin){
            console.log('TODO: onClosing');
            return
            sessionSettings.setValue('activeToken', null)
            sessionSettings.setValue('activeUser', null)
        }
    }
    Settings {
        id: sessionSettings
        category: "User"
    }
}
