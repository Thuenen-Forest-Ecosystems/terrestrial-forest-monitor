// bluetoothdevices.h
#ifndef BLUETOOTHDEVICES_H
#define BLUETOOTHDEVICES_H

#include <QObject>
#include <QVariant>
#include <QQmlEngine>
#include <QtBluetooth/QBluetoothDeviceDiscoveryAgent>
#include <QtBluetooth/QBluetoothDeviceInfo>

class BluetoothDevices : public QObject
{
    Q_OBJECT
    Q_PROPERTY(QVariant devices READ devices NOTIFY devicesUpdated)
    QML_ELEMENT

public:
    explicit BluetoothDevices(QObject *parent = nullptr);
    ~BluetoothDevices();

    QVariant devices() const;

public slots:
    void startDiscovery();

signals:
    void devicesUpdated();

private slots:
    void deviceDiscovered(const QBluetoothDeviceInfo &device);

private:
    QBluetoothDeviceDiscoveryAgent *m_discoveryAgent;
    QList<QBluetoothDeviceInfo> m_devices;
};

#endif // BLUETOOTHDEVICES_H
