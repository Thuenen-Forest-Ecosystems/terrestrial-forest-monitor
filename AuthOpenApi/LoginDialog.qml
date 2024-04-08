import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts

// http://imaginativethinking.ca/bi-directional-data-binding-qt-quick/
import Layouts

Dialog {
    modal: true

    property alias loginForm: loginForm
    property StackView authStackView: authStackView

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
        GenericButton{
            visible: wrapper.isLoggedIn

            Layout.alignment: Qt.AlignRight

            buttonText: "abmelden"
            buttonIcon: "e9ba"

            fn: function onClicked(){

                let item = authStackView.get(0);
                authStackView.pop(item, StackView.Immediate);
                console.log('dsdsdsds');

                loginDialogPopup.close()
                wrapper.logout()


            }
            raised: true
        }
    }

}
