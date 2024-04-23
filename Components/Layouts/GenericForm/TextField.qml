Item {

    property variant schema
    property variant errors
    property var values
    property string key

    width: childrenRect.width

    Label {
        text: key
    }

    GenericTextField {
        id: textField
        objectKey: key
        parentObject: values
        placeholderText: "Enter value"
    }
    
}