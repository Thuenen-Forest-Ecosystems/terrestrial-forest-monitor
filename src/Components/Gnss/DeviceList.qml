import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts 1.15


Item {
    BluetoothDevices {
        id: bluetoothDevices
    }

    ListView {
        id: listView
        anchors.fill: parent
        model: bluetoothDevices.devices

        delegate: Text {
            text: modelData
        }
    }

    Component.onCompleted: {
        bluetoothDevices.startDiscovery()
    }
}
/*Item {
    visible: true
    width: 640
    height: 480

    ListView {
        id: listView
        anchors.fill: parent
        model: Device.devicesList

        delegate: Text {
            text: modelData.name
        }
    }

    Component.onCompleted: {
        Device.startDeviceDiscovery()
    }
}*/
