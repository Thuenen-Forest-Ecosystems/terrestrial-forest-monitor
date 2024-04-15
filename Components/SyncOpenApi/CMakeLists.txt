# https://www.youtube.com/watch?v=5YoEjIbzBA0

qt_add_library(SyncOpenApiLib STATIC)

set_target_properties(SyncOpenApiLib PROPERTIES AUTOMOC ON)
target_link_libraries(SyncOpenApiLib PRIVATE Qt6::Quick )

set_source_files_properties(Sqlite.qml PROPERTIES
    QT_QML_SINGLETON_TYPE TRUE
)

#list(APPEND MODULE_QML_FILES SButton.qml SImageButton.qml SSlider.qml SText.qml SToggleButton.qml)

qt_add_qml_module(SyncOpenApiLib
    URI SyncOpenApi
    VERSION 1.0
    RESOURCE_PREFIX "/qt/qml"

    QML_FILES
    SyncButton.qml

    SyncTables.qml
    SyncTablesForm.qml
    Sqlite.qml

)
