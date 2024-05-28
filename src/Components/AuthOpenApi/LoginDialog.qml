import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts

import Layouts

//Dialog {
GenericDialog {
    anchors.centerIn: parent
    showLogo: false

    id: root

    //modal: true

    signal onLoggedIn()
    signal onLoggedOut()

    property alias loginForm: loginForm

    title: wrapper.isLoggedIn ? "Abmelden" : "Eingabe Nutzerdaten"

    onRejected: {
        loginForm.resetForm();
    }



    AuthWrapper{
        id: wrapper
        visible: false
    }


    

        LoginForm{
            id: loginForm
            visible: !wrapper.isLoggedIn || AuthUtils.tockenIsValid() < 0
            onSuccessfullLogin: {
                root.close()
                root.onLoggedIn()
            }
            onLoginFailed: {
                loginForm.resetForm();
            }
        }
        ColumnLayout{
            visible: wrapper.isLoggedIn && AuthUtils.tockenIsValid() > 0
            
            Label{
                visible: AuthUtils.tockenIsValid() < 0
                text: "Token is expired"
            }
            GenericButton{
                

                Layout.alignment: Qt.AlignRight

                buttonText: "abmelden"
                buttonIcon: "e9ba"

                fn: function onClicked(){
                    root.close()
                    wrapper.logout()
                    root.onLoggedOut()
                }
                raised: true
            }
        }
    

}
