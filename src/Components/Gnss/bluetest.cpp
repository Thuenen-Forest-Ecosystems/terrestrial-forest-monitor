#include "bluetest.h"

BlueTest::BlueTest() {}

QString BlueTest::myName() const
{
    return m_myName;
}

void BlueTest::setMyName(const QString &newMyName)
{
    if (m_myName == newMyName)
        return;
    m_myName = newMyName;
    emit myNameChanged();
}
