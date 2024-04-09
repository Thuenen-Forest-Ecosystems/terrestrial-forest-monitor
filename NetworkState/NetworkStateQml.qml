
import QtQuick 2.12
import QtQuick.Controls 2.0

import NetworkState 1.0

Item{
    NetworkState {
        id: networkState
    }
    Label {
        id: name
        text: qsTr(networkState.isOnline.toString())
    }
}
