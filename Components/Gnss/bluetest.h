#ifndef BLUETEST_H
#define BLUETEST_H

#include <QtCore/qlist.h>
#include <QtCore/qobject.h>
#include <QtCore/qvariant.h>

#include <QtQmlIntegration/qqmlintegration.h>

class BlueTest
{
    Q_PROPERTY(QString myName READ myName WRITE setMyName NOTIFY myNameChanged FINAL)
    QML_ELEMENT

public:
    BlueTest();
    QString myName() const;
    void setMyName(const QString &newMyName);
signals:
    void myNameChanged();
private:
    QString m_myName;
};

#endif // BLUETEST_H
