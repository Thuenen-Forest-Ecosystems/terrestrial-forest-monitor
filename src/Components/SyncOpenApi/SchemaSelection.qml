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
    function getSchemaNames() {
        dbSchemas = []

        SyncUtils.getSchemata((response) => {

            if(response.error) {
                toast.show(response.error, 5000, "#ff0000");
                return
            }else{
                toast.show("Erfolgreich", 3000, "#00ff00");
                dbSchemas = response.data
                activateCurrentSchema()
            }
        })
    }

    Connections{
        target: SyncUtils
        function onHostChanged(newHost){
            getSchemaNames();
        }
    }
    Component.onCompleted: {
        getSchemaNames();
    }
    
    enabled: dbSchemas.length > 0
    textRole: "schema_name"
    valueRole: "schema_name"
    currentIndex: 0
    model: dbSchemas
    width: parent.width
    onActivated: {
        settings.setValue("schema", schemaComboBox.currentValue)
        SyncUtils.schema_name = schemaComboBox.currentValue
    }

    Settings {
        id: settings
        category: "Schema"
    }
}