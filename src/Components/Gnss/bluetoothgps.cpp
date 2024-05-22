// bluetoothgps.cpp
#include "bluetoothgps.h"

BluetoothGPS::BluetoothGPS(QObject *parent)
    : QObject(parent),
      discoveryAgent(new QBluetoothDeviceDiscoveryAgent(this)),
      socket(new QBluetoothSocket(QBluetoothServiceInfo::RfcommProtocol, this)),
      positionInfoSource(QGeoPositionInfoSource::createDefaultSource(this))
{
    connect(discoveryAgent, &QBluetoothDeviceDiscoveryAgent::deviceDiscovered, this, &BluetoothGPS::deviceDiscovered);
    connect(socket, &QBluetoothSocket::readyRead, this, &BluetoothGPS::readSocket);
    connect(positionInfoSource, &QGeoPositionInfoSource::positionUpdated, this, &BluetoothGPS::positionUpdated);

    discoveryAgent->start();
}

void BluetoothGPS::deviceDiscovered(const QBluetoothDeviceInfo &device)
{
    if (!device.isValid() && socket->state() == QBluetoothSocket::SocketState::UnconnectedState	) {
        socket->connectToService(device.address(), QBluetoothUuid::ServiceClassUuid::SerialPort	);
    }
}

void BluetoothGPS::readSocket()
{
    QByteArray data = socket->readAll();
    // TODO: Parse GPS data from 'data'
}

void BluetoothGPS::positionUpdated(const QGeoPositionInfo &info)
{
    currentPosition = info;
    emit positionChanged();
}
