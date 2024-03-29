qt_add_library(NetworkStateLib STATIC)

set_target_properties(NetworkStateLib PROPERTIES AUTOMOC ON)
target_link_libraries(NetworkStateLib PRIVATE Qt6::Quick )

set_source_files_properties(NetworkState.qml PROPERTIES
    QT_QML_SINGLETON_TYPE TRUE
)

qt_add_qml_module(NetworkStateLib
    URI NetworkState
    VERSION 1.0
    RESOURCE_PREFIX "/qt/qml"
    QML_FILES NetworkState.qml
    QML_FILES NetworkStateDialog.qml
)
