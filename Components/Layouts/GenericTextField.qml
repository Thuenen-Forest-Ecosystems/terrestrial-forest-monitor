import QtQuick 6.2
import QtQuick.Controls
import QtQuick.Layouts

RowLayout{

    id: root

    required property string placeholderText

    property var parentObject
    property string objectKey

    property alias text: userNameTextField.text

    height: childrenRect.height

    TextField {
        id: userNameTextField
        placeholderText: root.placeholderText
        Layout.fillWidth: true
        inputMethodHints: Qt.ImhEmailCharactersOnly
        Keys.onReturnPressed: validateSendForm()
        Keys.onEnterPressed: validateSendForm()
        onDisplayTextChanged:{
            validate();
            parentObject[objectKey] = userNameTextField.text
        }
    }
}
