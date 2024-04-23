import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

import Layouts

Item{
    required property variant errors

    width: childrenRect.width
    height: childrenRect.height

    GenericButton{
        buttonText: "Fertig"
        buttonIcon: "e163"
        buttonEnabled: errors.length === 0
        fn: () => {
            console.log('Fertig');
        }
        badge: errors.length ? errors.length : null
    }

}