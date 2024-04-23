import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

import Layouts

ColumnLayout{

    id: genericForm

    property var sprite
    property var sprites: []

    property variant schema
    property variant errors
    property variant values
    property string key


    function destroyAllSprites(){
        for (var i = 0; i < sprites.length; i++) {
            sprites[i].destroy();
        }
        sprites = [];
    }

    function updateForm(){
        if(!schema || !key) return;
        

        destroyAllSprites();


        if(schema.properties[key].type === "string"){
            
            if(!values[key]){
                values[key] = "";
                console.log('ERROR:', key);
                return;
            }

            createObject("qrc:/qt/qml/Layouts/GenericForm/TextField.qml", {
                "key": key,
                "schema": schema.properties[key],
                "errors": errors,
                "values": values
            })

            
        }else if(schema.properties[key].type === "object"){
            
            for(const [nKey, nValue] of Object.entries(schema.properties[key].properties)){                
                createObject("qrc:/qt/qml/Layouts/GenericForm.qml", {
                    "key": nKey,
                    "schema": schema.properties[key],
                    "errors": errors,
                    "values": values[key],
                })

            }
        }
    }
    function createObject(qmlFile, properties = {}) {
        const component = Qt.createComponent(qmlFile);
        if (component.status == Component.Ready){
            sprite = component.createObject(placeHolder);
            sprite.values = properties.values;
            sprite.errors = properties.errors;
            sprite.key = properties.key;
            sprite.schema = properties.schema;
             
            if (sprite === null) {
                console.log("Error creating object");
            }else{
                sprites.push(sprite);
            }
        }else if (component.status === Component.Error) {
            console.log("Error loading component:", component.errorString());
            //component.statusChanged.connect(finishCreation);
        }
    }
    onErrorsChanged: {
        for (var i = 0; i < sprites.length; i++) {
            sprites[i].errors = errors;
        }
    }
    onKeyChanged: {
        updateForm()
    }
    onSchemaChanged: {
        updateForm()
    }

    GridLayout{
        columnSpacing: 10
        rowSpacing: 10
        id: placeHolder
        Layout.fillWidth: true

        Layout.topMargin: 10
    }

    

}