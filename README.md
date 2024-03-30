# CI2027 Playground

This repository is a playground for the CI2027 modules/components, layouts and functionality.

## Components

### AuthOpenApi

#### AuthenticationButton

The `AuthenticationButton` component is a button that allows the user to authenticate with the OpenAPI server. The button will open a dialog that will allow the user to enter their username and password. The button will then send the username and password to the OpenAPI server and receive a token in return. The token will be stored in [`QtCore.settings`](https://doc.qt.io/qt-6/qml-qtcore-settings.html) and can be accessed by other components.

```qml
import AuthOpenApi

Page{
    AuthenticationButton{
        userName: "Default Username" //Sets the default username
    }
}
```
