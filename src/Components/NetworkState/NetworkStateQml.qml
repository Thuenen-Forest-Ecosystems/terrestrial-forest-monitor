import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts

import QtNetwork

import Layouts

Rectangle {

    property var reachability: NetworkInformation.reachability
    property variant reachabilityStates: [
        {
            state: NetworkInformation.Unknown,
            text: "Unknown",
            description: "Indicates that the system is in an unknown state.",
            color: "red"
        },
        {
            state: NetworkInformation.Disconnected,
            text: "Not reachable",
            description: "Indicates that the system is not connected to a network.",
            color: "red"
        },
        {
            state: NetworkInformation.Local,
            text: "Reachable via local area network",
            description: "Indicates that the system is connected to a network, but it might only be able to access devices on the local network.",
            color: "yellow"
        },
        {
            state: NetworkInformation.Site,
            text: "Reachable via mobile network",
            description: "Indicates that the system is connected to a network, but it might only be able to access devices on the local subnet or an intranet.",
            color: "yellow"
        },
        {
            state: NetworkInformation.Online,
            text: "Reachable via mobile network",
            description: "Indicates that the system is connected to a network and able to access the Internet.",
            color: "green"
        }
    ]
   
    Connections {
        target: NetworkInformation
        function onReachabilityChanged() {
            reachability = NetworkInformation.reachability
        }
    }
    IconButton {
        id: fullscreenBtn
        codePoint: "e63e"
        iconColor: reachabilityStates[reachability].color
        toolTip: "Fullscreen"

        onClicked: function(e){
            console.log('Open dialog');
        }
    }
    
}