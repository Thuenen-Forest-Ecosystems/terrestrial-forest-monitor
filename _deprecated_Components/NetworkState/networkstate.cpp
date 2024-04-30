#include "networkstate.h"
#include <string>


NetworkState::NetworkState(QObject *parent)
    : QObject{parent}
    , m_isOnline(false)
{


}

bool NetworkState::isOnline()
{
    return m_isOnline;
}

void NetworkState::setIsOnline(bool &newIsOnline)
{
    if (m_isOnline == newIsOnline)
        return;
    m_isOnline = newIsOnline;
    emit isOnlineChanged();
}
