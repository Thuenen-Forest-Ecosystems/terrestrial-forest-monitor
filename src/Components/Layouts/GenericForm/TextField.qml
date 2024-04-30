import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

import Layouts

Item {

    property variant schema
    property variant errors
    property variant values
    property string key

    property var defaultValues: schema.default || null

    width: childrenRect.width
    height: childrenRect.height

    Component.onCompleted: {
        if (!values[key]) {
            values[key] = ""
        }
        console.log("schema: ", schema)
    }

    GenericTextField {
        id: textField
        objectKey: key
        parentObject: values
        placeholderText: schema.name || "[title missing]"
        formErrors: errors
    }
    
}