import QtQuick 6.2
import QtQuick.Controls
import QtQuick.Layouts

import Layouts
import SyncOpenApi

Item{
    id: hostIndicator
    width: childrenRect.width
    height: childrenRect.height

    property color buttonIconColor

    visible: false

    Component.onCompleted: {
        hostIndicator.visible = !SyncUtils.isDefaultSchema
    }
    Connections{
        target: SyncUtils
        function onHostChanged(newHost){
            hostIndicator.visible = !SyncUtils.isDefaultSchema
        }
    }

    IconButton {
        codePoint: "e86f"
        toolTip: "DevTools"
        iconColor: buttonIconColor

        onClicked: function(e){
            console.log('weiter')
        }
    }

}