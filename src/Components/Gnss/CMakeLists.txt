qt_add_library(GnssLib STATIC)

set_target_properties(GnssLib PROPERTIES AUTOMOC ON)
target_link_libraries(GnssLib PRIVATE Qt6::Quick )

qt_add_qml_module(GnssLib
    URI Gnss
    VERSION 1.0
    RESOURCE_PREFIX "/qt/qml"
    QML_FILES Connect.qml
    QML_FILES Bluetest.qml
    QML_FILES GpsInfo.qml
    QML_FILES DeviceList.qml
    QML_FILES BluetoothSearch.qml
    SOURCES 
        #bluetoothdevices.h bluetoothdevices.cpp
        #bluetoothbaseclass.cpp bluetoothbaseclass.h
        #connectionhandler.cpp connectionhandler.h
        #devicefinder.cpp devicefinder.h
        #devicehandler.cpp devicehandler.h
        #deviceinfo.cpp deviceinfo.h
)
