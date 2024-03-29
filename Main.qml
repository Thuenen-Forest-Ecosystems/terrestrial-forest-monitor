
import QtQuick 6.2
import QtQuick.Controls.Material

//import CppIntegration

import Playground

import AuthOpenApi
import SyncOpenApi
import Generic
import Layouts

// https://www.youtube.com/watch?v=rsBQgR_pd48
// https://doc.qt.io/archives/qt-5.9/qtqml-cppintegration-topic.html

ApplicationWindow {

    property real theme: Material.Dark
    property string themeBackground: Material.background

    id: applicationWindow
    visible: true

    title: qsTr("Playground")




    Material.theme: theme
    Material.primary: "#C3E399"
   // Material.variant: "Dense"
    Material.accent: "#78BE1E"
    Material.background: themeBackground


    minimumWidth: 200
    minimumHeight: 200

    width: 700
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
        initialItem: "qrc:/qt/qml/Pages/wellcome.qml"
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

    LoginDialog {
        id: dialogPopup
        anchors.centerIn: parent
    }
}
