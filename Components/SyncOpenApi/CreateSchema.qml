import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import QtCore

import StaticData

import "qrc:/Playground/js/build/bundle.cjs.js" as BundleCjs
import "qrc:/Playground/js/build/dereference.cjs.js" as DereferenceCjs

Item {
    width: childrenRect.width
    height: childrenRect.height

    property alias settings: settings
    property var _schema: {}

    // TODO: Load the schema from the server
    ContentLoader{
        id: contentLoader
        url: "qrc:/qt/qml/StaticData/response_1714067568845.json"
        Component.onCompleted: {
            const schemaDefinitions = contentLoader.json

            const schemaName = 'bwi_de_001_dev';
            
            contentLoader.loader(`qrc:/qt/qml/StaticData/${schemaName}.json`, function(schema) {
                schema.definitions = schemaDefinitions.definitions;
                schema.parameters = schemaDefinitions.parameters;

                _schema = DereferenceCjs.dereference.dereferenceSync(schema);
                delete _schema.definitions;
                delete _schema.parameters;

                setSchema(schemaName, _schema);

            });
        }
    }

    function getSchema(name){
        return settings.value(name)
    }
    function setSchema(name, schema){
        const tmpSchema = JSON.stringify(schema);
        settings.setValue(name, tmpSchema);
        return tmpSchema;
    }

    Label{
        text: "Hello World"
    }
    Settings {
        id: settings
        category: "Schema"
    }
}
