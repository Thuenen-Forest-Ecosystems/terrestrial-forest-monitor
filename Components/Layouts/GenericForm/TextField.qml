import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

import Layouts

Item {

    property variant schema
    property variant errors
    property variant values
    property string key

    width: childrenRect.width
    height: childrenRect.height
    
    onValuesChanged: {
        console.log("values changed", JSON.stringify(errors))
    }

    GenericTextField {
        id: textField
        objectKey: key
        parentObject: values
        placeholderText: schema.title
        formErrors: errors
    }
    
}