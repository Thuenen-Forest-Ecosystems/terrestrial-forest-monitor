import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2

import Layouts 1.0

RowLayout {

    property bool buisy: false
    property variant errors: []

    
    GenericButton{

        buttonEnabled: !buisy && errors?.length === 0
        buttonText: "Test-Token"
        fn: function(){
            console.log(AuthUtils.tockenIsValid());
        }
        raised: true
        isBusy: buisy
        badge: errors?.length > 0 ? errors?.length.toString() : null

    }

}
