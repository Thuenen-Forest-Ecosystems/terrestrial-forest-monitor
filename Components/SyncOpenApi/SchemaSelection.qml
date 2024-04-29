import QtQuick 6.2
import QtQuick.Controls
import QtQuick.Layouts

import QtCore

import SyncOpenApi 1.0

ComboBox {

    property variant dbSchemas: []
    property alias settings: settings

    id: schemaComboBox

    function activateCurrentSchema() {
        const currentValue = settings.value("schema");

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
        SyncUtils.getSchemata(function(response) {
            const unfilteredSchemas = response.data
            dbSchemas = unfilteredSchemas.filter(function(schema) {
                return schema.schema_name.startsWith("bwi")
            })
            activateCurrentSchema()
        })
    }
    enabled: dbSchemas.length > 0
    textRole: "schema_name"
    valueRole: "schema_name"
    currentIndex: 0
    model: dbSchemas
    width: parent.width
    onActivated: {
        settings.setValue("schema", schemaComboBox.currentValue)
    }

    Settings {
        id: settings
        category: "Schema"
    }
}