import QtQuick 6.2
import QtCore

import QtQuick.Controls
import QtQuick.Layouts

import QtBluetooth


Rectangle {

    width: 360
    height: 360

    Label {

        id: label

        text: "Bluetooth Device Discovery"

        anchors.centerIn: parent

    }

    BluetoothDiscoveryModel {

        id: btModel

        running: true

        discoveryMode: BluetoothDiscoveryModel.DeviceDiscovery

    }

    //Listview to hold the discovered device name and address

    ListView{

        id:view

        model: btModel

        anchors.fill: parent

        spacing:0

        delegate:Item{

            width:360

            height:60

            Rectangle{

                id: borderRect

                color: "transparent"

                border.color: "black"

                border.width: 1

                anchors.fill: parent

            }

            Item{

                anchors.fill: parent

                Label {

                    id:btdeviceName

                    x:10

                    y:5

                    text: "Name : " + qsTr(deviceName)

                    color: "white"

                }

                Label {

                    id:btdeviceaddr

                    x:10

                    text: "Address : " + qsTr(remoteAddress)

                    y:btdeviceName.height + 10

                    color: "white"

                }

            }

        }

    }

}