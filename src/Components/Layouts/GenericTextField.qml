import QtQuick 6.2
import QtQuick.Controls
import QtQuick.Layouts

ColumnLayout{

    id: root
    property string errorMessage

    required property string placeholderText

    property var parentObject
    property string objectKey
    property variant formErrors
    property var onChange: () => {}

    property var echoMode

    property string description

    property string error


    function getErrors(){
        error = ''

        for(const curError of formErrors){
            if(curError.instancePath.endsWith(root.objectKey)){
                error = curError.message
                break
            }
        }
    }

    /*Connections {
        target: genericForm
        function onErrorsChanged() {
            getErrors()

        }
    }*/

    onFormErrorsChanged: {
        getErrors()
    }

    RowLayout{
        height: childrenRect.height

        TextField {
            id: textField
            placeholderText: root.placeholderText
            Layout.fillWidth: true
            inputMethodHints: Qt.ImhEmailCharactersOnly
            echoMode: root.echoMode || "Normal"
            //Keys.onReturnPressed: validateSendForm()
            //Keys.onEnterPressed: validateSendForm()
            text: parentObject[objectKey]
            onDisplayTextChanged:{
                parentObject[objectKey] = textField.text
                validate();
            }
        }
    }
    Rectangle{
        color: "red"
        height: childrenRect.height
        width: childrenRect.width
        radius: 5
        Label {
            visible: true
            text: error
            color: "#eee"
            Layout.leftMargin: 20
            
        }
    }
}
