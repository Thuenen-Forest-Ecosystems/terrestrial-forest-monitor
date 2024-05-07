pragma Singleton

import QtQuick 2.15
import QtCore



Item {
    property string apiHost: "https://wo-apps.thuenen.de/postgrest/"
    property alias sessionSettings: sessionSettings
    
    function sendHttpRequest(endPoint, type = 'GET', body = {}) : void {

        let errorMessage = ""

        if(!endPoint) {
            errorMessage = "Kein Endpunkt angegeben"
            return
        }

        body = JSON.stringify(body);

        var http = new XMLHttpRequest()
        var url = apiHost + endPoint;

        http.open("POST", url, true);

        http.setRequestHeader("accept", "application/json");
        http.setRequestHeader("Content-type", "application/json");
        http.setRequestHeader("Connection", "close");

        http.onreadystatechange = function() {
            if (http.readyState == 4) {

                // server down: TODO: Check Server before form is shown
                if(http.responseText == '') {
                    errorMessage = "Server nicht erreichbar"
                    return
                }
                var object = JSON.parse(http.responseText.toString());

                if (http.status == 200) {
                    //saveTocken(object.token, userName, password);
                    //resetForm()
                } else {
                    errorMessage = object.message
                    errorMessageVisible = true
                }
            }
        }
        http.send(body);
    }

    function getToken() {
        return sessionSettings.value('activeToken')
    }
    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(Qt.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }
    function tokenPayload() {
        return parseJwt(getToken());
    }
    function tockenIsValid() {
        
        var token = getToken();
        console.log(token);
        if(token) {
            const payload = parseJwt(token);
            const exp = payload.exp * 1000;

            const now = new Date();
            const expires = new Date(exp + 120 * 60000);

            console.log("TODO: fix timestamp", now, expires);

            if(now < expires)
                return true;
        }
        return false;
    }

    Settings {
        id: sessionSettings
        category: "User"
    }
}
