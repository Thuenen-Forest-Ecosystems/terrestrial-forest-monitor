// bluetoothdevices.cpp
#include "bluetoothdevices.h"
#include <QVariant>

//#include <QtBluetooth/QBluetoothDeviceDiscoveryAgent>
//#include <QtBluetooth/QBluetoothDeviceInfo>

BluetoothDevices::BluetoothDevices(QObject *parent) : QObject(parent)
{
    m_discoveryAgent = new QBluetoothDeviceDiscoveryAgent(this);
    connect(m_discoveryAgent, &QBluetoothDeviceDiscoveryAgent::deviceDiscovered, this, &BluetoothDevices::deviceDiscovered);
}

BluetoothDevices::~BluetoothDevices()
{
    delete m_discoveryAgent;
}

QVariant BluetoothDevices::devices() const
{
    QVariantList deviceList;
    for (const QBluetoothDeviceInfo &device : m_devices) {
        deviceList.append(device.name());
    }
    return deviceList;
}

void BluetoothDevices::startDiscovery()
{
    m_discoveryAgent->start();
}

void BluetoothDevices::deviceDiscovered(const QBluetoothDeviceInfo &device)
{
    m_devices.append(device);
    emit devicesUpdated();
}