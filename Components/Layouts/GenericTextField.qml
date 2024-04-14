import QtQuick 6.2
import QtQuick.Controls
import QtQuick.Layouts

ColumnLayout{

    id: root
    property string errorMessage

    required property string placeholderText

    property var parentObject
    property string objectKey

    property var echoMode

    property string description

    property variant formErrors

    property string error


    onFormErrorsChanged: {

        error = ''



        for(const curError of formErrors){
            if(curError.instancePath.endsWith(objectKey)){
                error = curError.message
                break
            }
        }
    }

    RowLayout{
        height: childrenRect.height

        TextField {
            id: textField
            placeholderText: root.placeholderText
            Layout.fillWidth: true
            inputMethodHints: Qt.ImhEmailCharactersOnly
            echoMode: root.echoMode || "Normal"
            Keys.onReturnPressed: validateSendForm()
            Keys.onEnterPressed: validateSendForm()
            onDisplayTextChanged:{

                parentObject[objectKey] = textField.text
                validate();

            }
        }
    }
    Label {
        visible: true
        text: error
        color: "#900"
        Layout.leftMargin: 20
    }
}
