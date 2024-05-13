import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import QtCore

import StaticData

import "qrc:/TFM/js/build/ajv.cjs.js" as BundleCjs
import "qrc:/TFM/js/build/dereference.cjs.js" as DereferenceCjs

Item {
    width: childrenRect.width
    height: childrenRect.height

    property alias settings: settings
    property var _schema: {}

    ContentLoader{
        id: contentLoader
    }

    function _createSchema(schemaDefinitions, schemaName){

        contentLoader.loader(`qrc:/qt/qml/StaticData/${schemaName}.json`, function(schema) {

            if(schema.error){
                console.log('schema:', schemaName, JSON.stringify(schema));
                return;
            }

            schema.definitions = schemaDefinitions.definitions;
            schema.parameters = schemaDefinitions.parameters;

            _schema = DereferenceCjs.dereference.dereferenceSync(schema);
            delete _schema.definitions;
            delete _schema.parameters;

            setSchema(schemaName, _schema);

        });
    }
    Component.onCompleted: {
        const schemaName = settings.value('schema')

        SyncUtils.sendHttpRequest(null, (result) => {
            _createSchema(result, schemaName)
        }, schemaName)

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
