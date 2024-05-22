import QtQuick 2.15
import QtQuick.Controls 2.15
import QtBluetooth 5.15

ApplicationWindow {
    visible: true
    width: 640
    height: 480
    title: "Bluetooth Discovery"

    ListView {
        id: listView
        anchors.fill: parent
        model: discoveryAgent
        delegate: Text { text: modelData.name + " (" + modelData.address + ")" }
    }

    BluetoothDiscoveryAgent {
        id: discoveryAgent
        onDeviceDiscovered: {
            console.log("Discovered device:", device.name, device.address)
        }
    }

    Component.onCompleted: discoveryAgent.start()
}