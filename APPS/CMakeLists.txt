qt_add_library(PagesLib STATIC)

set_target_properties(PagesLib PROPERTIES AUTOMOC ON)
target_link_libraries(PagesLib PRIVATE Qt6::Quick )


qt_add_qml_module(PagesLib
    URI Pages
    VERSION 1.0
    RESOURCE_PREFIX "/qt/qml"
    QML_FILES
        wellcome.qml
        CI27/Ecke.qml
        CI27/Ecken.qml
        CI27/Traktliste.qml
        CI27/Einstellungen.qml
        CI27/settings/Privileges.qml
)
