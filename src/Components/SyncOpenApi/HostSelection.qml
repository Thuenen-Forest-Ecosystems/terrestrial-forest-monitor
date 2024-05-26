import QtQuick 6.2
import QtQuick.Controls
import QtQuick.Layouts

import QtCore

import SyncOpenApi 1.0

ComboBox {

    property alias settings: settings

    property variant boxModel: [
        {
            "openApiHost": "https://wo-apps.thuenen.de/postgrest/",
            "schemataEndpoint": "my_schemata",
            "isDefaultSchema": true,
            "schemaPrefix": "bwi_"
        },
        {
            "openApiHost": "http://localhost:3000/",
            "schemataEndpoint": "my_schemata",
            "schemaPrefix": "bwi_"
        }
    ]

    id: schemaComboBox

    function activateCurrentSchema() {
        const currentValue = settings.value("host");
        const parsed = JSON.parse(currentValue)

        if (parsed) {
            for (let i = 0; i < boxModel.length; i++) {
                if (boxModel[i].openApiHost === parsed.openApiHost) {
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
    textRole: "openApiHost"
    currentIndex: 0
    model: boxModel
    width: parent.width
    onActivated: {
        settings.setValue("host", JSON.stringify(boxModel[schemaComboBox.currentIndex]))
        //SyncUtils.schema_name = schemaComboBox.currentValue
        SyncUtils.setHost(boxModel[schemaComboBox.currentIndex])
    }

    Settings {
        id: settings
        category: "Schema"
    }
}