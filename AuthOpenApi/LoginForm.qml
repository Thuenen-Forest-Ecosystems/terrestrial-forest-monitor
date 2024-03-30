import QtQuick 6.2
import QtQuick.Controls
import QtQuick.LocalStorage
import QtQuick.Layouts
import QtCore


ColumnLayout {

    // TODO: add to global variable
    property string apiHost: "https://wo-apps.thuenen.de/postgrest/"
    property string endpointLogin: "rpc/login"
    property string localOnlyDBName: "LocalOnlyDB"
    property string usersTable: "Greeting"

    property var db

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


    function executeResult(trans, results) {
        console.log(results);
    }

    function dropLocalUserTable() {
        db.transaction(
            function(tx) {
                tx.executeSql(`DROP TABLE IF EXISTS ${usersTable}`);
            }
        )
    }

    function getLocalUsers(){
        db.transaction(
            function(tx) {

                // Show all added greetings // Greeting
                var rs = tx.executeSql(`SELECT * FROM ${usersTable}`);

                var r = ""
                for (var i = 0; i < rs.rows.length; i++) {
                    r += rs.rows.item(i).username + ", " + rs.rows.item(i).token + "\n"
                    console.log(JSON.stringify(rs.rows.item(i)));
                }



            }
        )
    }

    function saveTocken(token, username) :void {
        let createdTimeStamp = new Date().getTime();

        settings.setValue('activeUser', username)
        settings.setValue('activeToken', token)
        settings.sync();
        activeUser = settings.value('activeUser')

        AuthState.latestLogin += 1;


        db.transaction(
            function(tx) {
                tx.executeSql('INSERT INTO Greeting VALUES(?, ?, ?, ?)', [createdTimeStamp, username, token,  createdTimeStamp + 10000], executeResult);
                getLocalUsers();
            }
        )

    }

    function createLocalUserTable() : void {
        db.transaction(
            function(tx) {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS ${usersTable}(created INT, username TEXT, token TEXT, expires INT)`, executeResult);
            }
        )
    }



    function sendHttpRequest(userName, password) : void {
        errorMessageVisible = false

        if(!userName || !password) {
            errorMessageVisible = true
            errorMessage = 'Gib dein Nutzername und Passwort ein.'
            return;
        }

        const body = JSON.stringify({
          email: userName,
          pass: password
        });

        var http = new XMLHttpRequest()
        var url = apiHost + endpointLogin;

        http.open("POST", url, true);

        http.setRequestHeader("accept", "application/json");
        http.setRequestHeader("Content-type", "application/json");
        http.setRequestHeader("Connection", "close");

        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                loggingIn = false

                // server down: TODO: Check Server before form is shown
                if(http.responseText == '') {
                    errorMessage = "Server is down. Try Later."
                    errorMessageVisible = true
                    return
                }


                var object = JSON.parse(http.responseText.toString());

                if (http.status == 200) {
                    console.log('SUCCESS: ', object.token);
                    saveTocken(object.token, userName);
                    loggingIn = true

                    loginDialogPopup.close()
                    resetForm()
                } else {
                    //console.log("ERROR: ", JSON.stringify(object))
                    errorMessage = object.message
                    errorMessageVisible = true
                    passwordTextField.text = '';
                    passwordTextField.forceActiveFocus()
                }
            }
        }
        http.send(body);
        loggingIn = true
    }
    function resetForm(){
        userNameTextField.text = '';
        passwordTextField.text = '';
        loggingIn = false
        errorMessage = ''
        errorMessageVisible = false

    }

    sendButton.onClicked: sendHttpRequest(userNameTextField.text, passwordTextField.text)

    Component.onCompleted: {
        db = LocalStorage.openDatabaseSync(localOnlyDBName, "1.0", "The Example QML SQL!", 1000000); // 1 MB
        dropLocalUserTable();
        createLocalUserTable();

        //AuthState.addListener(authStateChange)
    }


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
        Layout.fillWidth: true
    }

    Text {
        id: name
        visible: errorMessageVisible
        text: qsTr(errorMessage)
        color: "#ff0000"
    }

    BusyIndicator {
        implicitWidth: 25
        implicitHeight: 25
        running: true
        visible: loggingIn
    }

    Button {
        id: sendButton
        text: qsTr("ANMELDEN")
        enabled: !loggingIn
    }
}
