import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts

Rectangle {
   
    NetworkManager {
        id: networkManager
        onIsOnlineChanged:{
            console.log("Network is online: " + networkManager.isOnline)
        }
        onIsAvailableChanged:{
            console.log("Network information is" + networkManager.isAvailable)
        }
    }

    Button {
        enabled: networkManager.isAvailable
        text: networkManager.isOnline ? "Online" : "Offline"
        onClicked: networkManager.updateOnlineStatus()
    }
}