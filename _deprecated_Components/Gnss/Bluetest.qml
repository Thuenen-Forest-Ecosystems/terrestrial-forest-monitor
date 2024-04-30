import QtQuick 6.2

//import QtBluetooth 6.2

Item {

    property bool deviceState: BlueTest.myName

    /*BluetoothDiscoveryModel3 {
        id: btModel
        running: true
        discoveryMode: BluetoothDiscoveryModel.FullServiceDiscovery
        uuidFilter: targetUuid //e8e10f95-1a70-4b27-9ccf-02010264e9c8
    }
    onServiceDiscovered: {
        console.log('sdsd');
            if (serviceFound)
                return
            serviceFound = true
            console.log("Found new service " + service.deviceAddress + " " + service.deviceName + " " + service.serviceName);
            searchBox.appendText("\nConnecting to server...")
            remoteDeviceName = service.deviceName
            socket.setService(service)
    }*/
    Text {
        id: name
        text: qsTr('deviceState')
    }
}
