import QtQuick 2.15
import QtQuick.Controls 6.2
import QtCore
import QtQuick.Layouts

import AuthOpenApi
import Layouts

RowLayout {
    

    property string schema_name

    property alias schemaSettings: schemaSettings
    property bool isBusy: false
    property bool isSyncing: false

    //width: childrenRect.width

    Component.onCompleted: {
        schema_name = schemaSettings.value("schema")
    }

    function _syncTables(){
        if(isSyncing) return;

        isSyncing = true;
        
        SyncUtils.syncTables(schema_name, (res) => {

            if(res?.error){

                if(res?.error?.error)
                    toast.show(res.error.error, 5000, "#ff0000");
                if(res?.error)
                    toast.show(res.error, 5000, "#ff0000");

                if(!wrapper.isLoggedIn || AuthUtils.tockenIsValid() < 0){
                    loginDialogPopup.open();
                    loginDialogPopup.onLoggedIn.connect(() => {
                        _syncTables();
                    });
                }
                

            }else{
                toast.show("Erfolgreich synchronisiert.", 4000, "#00ff00");
            }
            isSyncing = false;
        })
    }

    GenericButton{
        buttonText: "Sync"
        buttonToolTip: "ANMELDEN"
        buttonIcon: "e627"
        fn: (e) => {
            _syncTables();
        }
        buttonEnabled: !isSyncing
        isBusy: isSyncing
    }

    AuthWrapper{
        id: wrapper
        visible: false
    }

    Settings {
        id: schemaSettings
        category: "Schema"
    }
}
