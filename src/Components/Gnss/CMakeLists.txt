qt_add_library(GnssLib STATIC)

set_target_properties(GnssLib PROPERTIES AUTOMOC ON)
target_link_libraries(GnssLib PRIVATE Qt6::Quick )

qt_add_qml_module(GnssLib
    URI Gnss
    VERSION 1.0
    RESOURCE_PREFIX "/qt/qml"
    QML_FILES Connect.qml
    QML_FILES Bluetest.qml
    SOURCES bluetoothbaseclass.h bluetoothbaseclass.cpp
)
