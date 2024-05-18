import QtQuick 6.2
import QtCore

import QtQuick.Controls
import QtQuick.Layouts

Text {
    text: "Position: " + BluetoothGPS.position.coordinate.latitude + ", " + BluetoothGPS.position.coordinate.longitude
}