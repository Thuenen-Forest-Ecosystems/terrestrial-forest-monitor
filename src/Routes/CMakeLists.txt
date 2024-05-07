qt_add_library(RoutesLib STATIC)

set_target_properties(RoutesLib PROPERTIES AUTOMOC ON)
target_link_libraries(RoutesLib PRIVATE Qt6::Quick )


qt_add_qml_module(RoutesLib
    URI Routes
    VERSION 1.0
    RESOURCE_PREFIX "/qt/qml"
    QML_FILES
        wellcome.qml
        CI27/Ecke.qml
        CI27/EckeTest.qml
        CI27/Ecken.qml
        CI27/Traktliste.qml
        CI27/Einstellungen.qml
)
