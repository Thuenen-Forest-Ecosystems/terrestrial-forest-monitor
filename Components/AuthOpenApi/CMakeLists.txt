qt_add_library(AuthOpenApiLib STATIC)

set_target_properties(AuthOpenApiLib PROPERTIES AUTOMOC ON)
target_link_libraries(AuthOpenApiLib PRIVATE Qt6::Quick )

set_source_files_properties(AuthState.qml PROPERTIES
    QT_QML_SINGLETON_TYPE TRUE
)

qt_add_qml_module(AuthOpenApiLib
    URI AuthOpenApi
    VERSION 1.0
    RESOURCE_PREFIX "/qt/qml"
    QML_FILES
    LoginDialog.qml
    LoginForm.qml
    #LoginFormForm.ui.qml
    AuthenticationButton.qml

    AuthState.qml
    AuthWrapper.qml



)
