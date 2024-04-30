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

        if(!values.hasOwnProperty(key)) values[key] = null;


        if(schema.properties[key].type === "object"){

            if(!values[key]){
                values[key] = {};
            }
            
            for(const [nKey, nValue] of Object.entries(schema.properties[key].properties)){       
                if(!values[key]){
                    console.log('IS NOT SET');
                }         
                createObject("qrc:/qt/qml/Layouts/GenericForm.qml", {
                    "key": nKey,
                    "schema": schema.properties[key],
                    "errors": errors,
                    "values": values[key],
                })

            }
        }else{
            if(!values[key]){
                values[key] = null;
            }

            createObject("qrc:/qt/qml/Layouts/GenericForm/TextField.qml", {
                "key": key,
                "schema": schema.properties[key],
                "errors": errors,
                "values": values
            })
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