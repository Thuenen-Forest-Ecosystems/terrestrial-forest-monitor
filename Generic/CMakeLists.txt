qt_add_library(GenericLib STATIC)

set_target_properties(GenericLib PROPERTIES AUTOMOC ON)
target_link_libraries(GenericLib PRIVATE Qt6::Quick )

qt_add_qml_module(GenericLib
    URI Generic
    VERSION 1.0
    RESOURCE_PREFIX "/qt/qml"
    QML_FILES  BasicLayout.qml
    QML_FILES  TopBar.qml
    QML_FILES  pages/StartPage.qml
    QML_FILES  pages/Settings.qml
    QML_FILES  ComponentsList.qml
    QML_FILES  BasicPage.qml
    QML_FILES  BackBar.qml

    RESOURCES
        images/THUENEN_SCREEN_White.svg
        icons/settings_FILL0_wght400_GRAD0_opsz24.svg
        icons/contact_support_FILL0_wght400_GRAD0_opsz24.svg

)
