# CI2027 Playground

This repository is a playground for the CI2027 modules/components, layouts and functionality.

## Components

### AuthOpenApi

#### AuthenticationButton

The `AuthenticationButton` component is a button that allows the user to authenticate with the OpenAPI server. The button will open a [LoginDialog](#logindialog). State and text of the button will change depending on the authentication state.

```qml
import AuthOpenApi

Page{
    AuthenticationButton{
        userName: "Default Username" //Sets the default username
    }
}
```

```
!!! The `AuthenticationButton` component requires the `AuthOpenApi.LoginDialog` component to be placed in main.qml.
```

#### LoginDialog

The `LoginDialog` component is a dialog that shows a [LoginForm](#loginform).

```qml
    import AuthOpenApi

    LoginDialog {
        id: loginDialogPopup
        anchors.centerIn: parent
    }

```qml
    import AuthOpenApi

    LoginDialog {
        id: loginDialogPopup
        anchors.centerIn: parent
        authStackView: stackViewMain
    }
```

#### LoginForm

The `LoginForm` component is a form that allows the user to enter their username and password. The form will then send the username and password to the OpenAPI server and receive a token in return. The token will be stored in [`QtCore.settings`](https://doc.qt.io/qt-6/qml-qtcore-settings.html) and can be accessed by other components.

```qml
    import AuthOpenApi

    LoginForm {
        id: loginForm
        authStackView: stackViewMain // defines the stackView to pop stack after logout
    }
```
