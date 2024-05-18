// bluetoothgps.h
#ifndef BLUETOOTHGPS_H
#define BLUETOOTHGPS_H

#include <QObject>
#include <QBluetoothSocket>
#include <QBluetoothDeviceDiscoveryAgent>
#include <QGeoPositionInfoSource>

class BluetoothGPS : public QObject
{
    Q_OBJECT
    Q_PROPERTY(QGeoPositionInfo position READ position NOTIFY positionChanged)

public:
    BluetoothGPS(QObject *parent = nullptr);

    QGeoPositionInfo position() const { return currentPosition; }

signals:
    void positionChanged();

private slots:
    void deviceDiscovered(const QBluetoothDeviceInfo &device);
    void readSocket();
    void positionUpdated(const QGeoPositionInfo &info);

private:
    QBluetoothDeviceDiscoveryAgent *discoveryAgent;
    QBluetoothSocket *socket;
    QGeoPositionInfoSource *positionInfoSource;
    QGeoPositionInfo currentPosition;
};

#endif // BLUETOOTHGPS_H