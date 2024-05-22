#include <QObject>
#include <QCoreApplication>

#include <QtNetwork/QNetworkInformation>
#include <QQmlEngine>
#include<QDebug>

class NetworkManager : public QObject
{
    Q_OBJECT
    Q_PROPERTY(bool isOnline READ isOnline NOTIFY isOnlineChanged)
    Q_PROPERTY(bool isAvailable READ isAvailable NOTIFY isAvailableChanged)
    QML_ELEMENT

public:
    explicit NetworkManager(QObject *parent = nullptr) : QObject(parent) {
        qInfo()<<QNetworkInformation::availableBackends();
        qInfo()<<QNetworkInformation::loadDefaultBackend();
        auto networkInfo = QNetworkInformation::instance();
        if (networkInfo) {
            connect(networkInfo, &QNetworkInformation::reachabilityChanged, this, &NetworkManager::updateOnlineStatus);
            updateOnlineStatus();
        } else {
            available = false;
            emit isAvailableChanged(available);
        }
    }

    bool isOnline() const {
        return online;
    }
    bool isAvailable() const {
        return available;
    }

    Q_INVOKABLE void updateOnlineStatus() {
        auto networkInfo = QNetworkInformation::instance();
        if (networkInfo) {
            online = QNetworkInformation::instance()->reachability() == QNetworkInformation::Reachability::Online;
        }else{
            available = false;
            emit isAvailableChanged(available);
        }
        emit isOnlineChanged(online);
    }

signals:
    void isOnlineChanged(bool online);
    void isAvailableChanged(bool available);

private:
    bool online = false;
    bool available = false;
};
