import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

import Layouts

Item{
    required property variant errors

    width: childrenRect.width
    height: childrenRect.height

    GenericButton{
        visible: errors
        buttonText: "Fertig"
        buttonIcon: "e163"
        buttonEnabled: errors.length === 0
        fn: (enabled) => {
            if(enabled)
                console.log('Fertig');
            else{
                validationdialog.open();
            
                console.log('Fehler');
            }
        }
        badge: errors.length ? errors.length : null
    }

    

}
