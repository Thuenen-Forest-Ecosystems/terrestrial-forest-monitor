import QtQuick 6.2
import QtQuick.Controls
import QtQuick.LocalStorage
import QtQuick.Layouts
import QtCore

import Layouts

//import "qrc:/Playground/js/node_modules/ajv/dist/ajv.js" as Ajv
import "qrc:/Playground/js/build/bundle.js" as Bundle



ColumnLayout {

    // TODO: add to global variable
    property string apiHost: "https://wo-apps.thuenen.de/postgrest/"
    property string endpointLogin: "rpc/login"
    property string localOnlyDBName: "LocalOnlyDB"
    property string usersTable: "USERS"

    property var db


    property alias userNameTextField: userNameTextField
    property alias userName: userNameTextField.text

    property alias passwordTextField: passwordTextField
    property alias password: passwordTextField.text

    property alias rememberLoginCheckbox: rememberLoginCheckbox

    property bool errorMessageVisible: false
    property string errorMessage: ""

    property bool loggingIn: false

    property alias settings: settings

    spacing: 20


    function executeResult(trans, results) {
        console.log('executeResult: ',results);
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

    function setAutoLogin(value){
        settings.setValue('autoLogin', value)
    }

    function setActiveUser(username, token){
        settings.setValue('activeUser', username)
        settings.setValue('activeToken', token)
        settings.sync();

        AuthState.latestLogin += 1;
        loginDialogPopup.close()
    }

    function saveTocken(token, username, password) :void {
        let createdTimeStamp = new Date().getTime();

        setActiveUser(username, token);

        const salt = generateSalt(16);

        const hash = hashCode(password + '/' + salt)

        const autoLogin = rememberLoginCheckbox.checked;


        removeUserByUsername(username)

        db.transaction(
            function(tx) {
                tx.executeSql(`INSERT INTO ${usersTable} VALUES(?, ?, ?, ?, ?, ?, ?)`, [createdTimeStamp, username, token, createdTimeStamp + 10000, salt, hash, autoLogin], executeResult);
                getLocalUsers();
            }
        )

    }
    function hashCode(string) {
      var hash = 0, i, chr;
      if (string.length === 0) return hash;
      for (i = 0; i < string.length; i++) {
        chr = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash.toString();
    }
    function generateSalt(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    function createLocalUserTable() : void {
        db.transaction(
            function(tx) {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS ${usersTable}(created INT, username TEXT, token TEXT, expires INT, salt TEXT, hash TEXT, autoLogin INT)`, executeResult);
            }
        )
    }


    function validateSendForm() : void {
        sendHttpRequest(userNameTextField.text, passwordTextField.text)
    }

    function removeUserByUsername(username){
        db.transaction(
            function(tx) {
                tx.executeSql(`DELETE FROM ${usersTable} WHERE username in ( ? )`, [userName], executeResult);
            }
        )
    }
    function getUserByUsername(username){
        let user = {};
        db.transaction(
            function(tx) {
                var rs = tx.executeSql(`SELECT * FROM ${usersTable} WHERE username in ( ? )`, [userName], executeResult);
                for (var i = 0; i < rs.rows.length; i++) {
                    user = rs.rows[i]
                    break
                }
            }
        )
        return user
    }

    function offlineLogin(userName, password){
        let user = getUserByUsername();

        if(!user.hash){
            errorMessageVisible = true
            errorMessage = 'Nutzer wurde noch nicht angelegt.'
            return;
        }


        const newHash = hashCode(password + '/' + user.salt)

        console.log(user.hash, newHash);

        if(newHash === user.hash) setActiveUser(userName, user.token);
        else errorMessage = "Server is down. Try Later."
    }


    function sendHttpRequest(userName, password) : void {
        errorMessageVisible = false



        if(!userName || !password) {
            errorMessageVisible = true
            errorMessage = 'Gib dein Nutzername und Passwort ein.'
            return;
        }
        if(!privacyCheckBox.checked){
            errorMessageVisible = true
            errorMessage = 'Die Datenschutzbestimmungen müssen akzeptiert werden.'
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
                    offlineLogin(userName, password);
                    return
                }


                var object = JSON.parse(http.responseText.toString());

                if (http.status == 200) {
                    saveTocken(object.token, userName, password);
                    loggingIn = true


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
        rememberLoginCheckbox.checked = false;
        userNameTextField.text = '';
        passwordTextField.text = '';
        loggingIn = false
        errorMessage = ''
        errorMessageVisible = false

    }

    function addValidation(){
        const ajv = new Bundle.ajv()

        const schema = {
          type: "object",
          properties: {
            foo: {type: "integer"},
            bar: {type: "string"}
          },
          required: ["foo"],
          additionalProperties: false
        }

        const validate = ajv.compile(schema)

        const data = {
          foo: "1",
          bar: "abc"
        }

        const valid = validate(data)
        if (!valid) console.log(JSON.stringify(validate.errors))
        else console.log("valid");
    }

    Component.onCompleted: {
        db = LocalStorage.openDatabaseSync(localOnlyDBName, "1.0", "The Example QML SQL!", 1000000); // 1 MB
        dropLocalUserTable();
        createLocalUserTable();

        //AuthState.addListener(authStateChange)
        addValidation();
    }




    Settings {
        id: settings
        category: "User"
    }

    TextField {
        id: userNameTextField
        placeholderText: 'E-Mail'
        Layout.fillWidth: true
        inputMethodHints: Qt.ImhEmailCharactersOnly
        Keys.onReturnPressed: validateSendForm()
        Keys.onEnterPressed: validateSendForm()
    }

    TextField {
        id: passwordTextField
        placeholderText: 'Passwort'
        echoMode: "Password"
        Layout.fillWidth: true
        Keys.onReturnPressed: validateSendForm()
        Keys.onEnterPressed: validateSendForm()
    }

    CheckBox {
        id: rememberLoginCheckbox
        checked: false
        text: qsTr("Anmeldung merken")
        /*onCheckStateChanged: {
            setAutoLogin(rememberLoginCheckbox.checked);
        }*/
    }

    RowLayout{
        Layout.fillWidth: true

        CheckBox {
            id: privacyCheckBox
            checked: false
        }
        Label {
            text: 'Ich habe die <a href="https://www.thuenen.de/de/datenschutzerklaerung" target="_blank">Datenschutzerklärung</a> gelesen und akzeptiere diese.'
            Layout.fillWidth: true
            wrapMode: Text.WordWrap
            onLinkActivated: (link) => {
                Qt.openUrlExternally(link)
            }
        }
    }

    Text {
        id: name
        visible: errorMessageVisible
        text: qsTr(errorMessage)
        color: "#ff0000"
        Layout.fillWidth: true
        wrapMode: Text.WordWrap
    }

    GenericButton{
        Layout.alignment: Qt.AlignRight

        buttonEnabled: !loggingIn
        buttonText: "anmelden"
        buttonIcon: "e163"
        fn: function(){
            validateSendForm()
        }
        raised: true
        isBusy: loggingIn
    }

}
