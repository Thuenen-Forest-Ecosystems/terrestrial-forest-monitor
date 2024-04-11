import QtQuick 6.2
import QtQuick.Controls
import QtQuick.Layouts
import QtCore


ColumnLayout {

    property alias sendButton: sendButton

    property alias userNameTextField: userNameTextField
    property alias userName: userNameTextField.text

    property alias passwordTextField: passwordTextField
    property alias password: passwordTextField.text

    property bool errorMessageVisible: false
    property string errorMessage: ""

    property bool loggingIn: false

    property alias settings: settings
    property var activeUser

    spacing: 20

    Layout.fillWidth: true

    Settings {
        id: settings
        category: "User"
    }

    TextField {
        id: userNameTextField
        placeholderText: 'Name'

        Layout.fillWidth: true

    }

    TextField {
        id: passwordTextField
        placeholderText: 'Passwort'
        echoMode: "Password"
    }

    Text {
        id: name
        visible: errorMessageVisible
        text: qsTr(errorMessage)
        color: "#ff0000"
    }

    Text {
        id: name2
        text: qsTr("text")
    }

    BusyIndicator {
        running: true
    }

    Button {
        id: sendButton
        text: qsTr("ANMELDEN")
        enabled: !loggingIn
    }


}





