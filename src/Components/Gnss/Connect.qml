import QtQuick 6.2
import QtCore

import QtQuick.Controls
import QtQuick.Layouts

import QtBluetooth


Button {
    text: "Start Discovery"
    onClicked: {
        console.log(BluetoothBaseClass.IconError)
        console.log(BluetoothBaseClass.IconBluetooth)
    }
}