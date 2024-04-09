#ifndef NETWORKSTATE_H
#define NETWORKSTATE_H

#include <QObject>
#include <QQmlEngine>

#include <QtNetwork>


class NetworkState : public QObject
{
    Q_OBJECT
    Q_PROPERTY(bool isOnline READ isOnline WRITE setIsOnline NOTIFY isOnlineChanged FINAL)
    QML_ELEMENT
public:
    explicit NetworkState(QObject *parent = nullptr);

    bool isOnline();
    void setIsOnline(bool &newIsOnline);

signals:
    void isOnlineChanged();
private:
    bool m_isOnline;
};

#endif // NETWORKSTATE_H
