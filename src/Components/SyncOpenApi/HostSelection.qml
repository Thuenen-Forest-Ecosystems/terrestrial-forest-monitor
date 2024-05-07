import QtQuick 6.2
import QtQuick.Controls
import QtQuick.Layouts

import QtCore

import SyncOpenApi 1.0

ComboBox {

    property alias settings: settings
    
    property variant boxModel: [
        {
            "label": "https://wo-apps.thuenen.de/postgrest/"
            "schema_description": "BWI Schema"
        },
        {
            "label": "http://localhost:3000/"
            "schema_description": "BWI Schema"
        }
    ]
    

    id: schemaComboBox

    function activateCurrentSchema() {
        const currentValue = settings.value("host");

        if (currentValue) {
            for (let i = 0; i < dbSchemas.length; i++) {
                if (dbSchemas[i].schema_name === currentValue) {
                    schemaComboBox.currentIndex = i
                    break
                }
            }
        }
    }
    
    Component.onCompleted: {
        activateCurrentSchema()
    }
    enabled: boxModel.length > 0
    textRole: "schema_name"
    valueRole: "schema_name"
    currentIndex: 0
    model: boxModel
    width: parent.width
    onActivated: {

        //settings.setValue("host", schemaComboBox.currentValue)
        //SyncUtils.schema_name = schemaComboBox.currentValue
    }

    Settings {
        id: settings
        category: "Schema"
    }
}