import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts

// http://imaginativethinking.ca/bi-directional-data-binding-qt-quick/

Dialog {
    modal: true

    property alias loginForm: loginForm

    title: wrapper.isLoggedIn ? "Abmelden" : "Eingabe Nutzerdaten"

    onRejected: {
        loginForm.resetForm();
    }



    AuthWrapper{
        id: wrapper
        visible: false
    }


    contentItem: ColumnLayout{

        height: 50

        LoginForm{
            id: loginForm
            visible: !wrapper.isLoggedIn
        }
        Button {
            Layout.alignment: Qt.AlignHCenter
            visible: wrapper.isLoggedIn
            text: qsTr("ABMELDEN")
            Connections {
                function onClicked(){
                    wrapper.logout()
                }
            }
        }
    }

}
