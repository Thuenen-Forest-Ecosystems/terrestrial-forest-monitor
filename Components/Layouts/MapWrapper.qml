import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2

Rectangle{
    id: mapWrapper

    visible: useMap

    Component.onCompleted: {
        console.log("useMap");
        if(mapBtn) mapBtn.setVisibility(true)
        console.log(showMap.mapState);
    }
    Component.onDestruction: if(mapBtn) mapBtn.setVisibility(false)

    Layout.fillHeight: true
    Layout.preferredWidth: 0
    color: "#888"

    clip: true

    Text {
        text: qsTr("MAP")
        anchors.centerIn: parent
    }

    Connections {
        target: mapBtn
        function onClicked(){
            showMap = !showMap
            mapBtn.mapStateChange(showMap)
        }
    }

    states: State {
        name: "moved";
        when: !showMap ? true : showMap == false
        PropertyChanges { target: mapWrapper; Layout.preferredWidth: 300; }
    }
    transitions: Transition {
        NumberAnimation {
            properties: "Layout.preferredWidth";
            easing.type: Easing.InOutCubic;
            duration: 300;
        }
    }
}