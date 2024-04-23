import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

import Layouts

ColumnLayout{
    id: root

    //property var component
    property var sprite

    property variant schema
    property variant errors
    property var values
    property string key

    function updateForm(){
        if(!schema || !key) return;

        if (sprite) {
            sprite.destroy();
        }

        if(schema.properties[key].type === "string"){
            console.log('STRING');
            createObject("qrc:/qt/qml/Layouts/GenericForm/TextField.qml", {
                "key": key,
                "schema": schema.properties[key],
                "errors": errors,
                "values": values[key],
            })
        }else if(schema.properties[key].type === "object"){
            console.log('object');
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
            sprite = component.createObject(root, properties);
            sprite.values = properties.values;
            sprite.errors = properties.errors;
            sprite.key = properties.key;
             
            if (sprite === null) {
                console.log("Error creating object");
            }else{
                console.log("Success creating object", sprite.height);
            }
        }else if (component.status === Component.Error) {
            console.log("Error loading component:", component.errorString());
            //component.statusChanged.connect(finishCreation);
        }
    }
    
    onErrorsChanged: {
        //sprite.formErrors = errors;
    }
    onKeyChanged: {
        updateForm()
    }
    onSchemaChanged: {
        updateForm()
    }

    Item{
        id: placeHolder
        Layout.fillWidth: true
        height: childrenRect.height
        width: childrenRect.width
    }

    GenericDivider{
        Layout.fillWidth: true
    }


    // REMOVE LATER
    /*GenericTextField{
        Layout.fillWidth: true
        placeholderText: schema.properties[key].title
        parentObject: values
        objectKey: key
        errors: errors
    }*/

}