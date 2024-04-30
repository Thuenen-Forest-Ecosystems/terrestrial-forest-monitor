qt_add_library(StaticDataLib STATIC)

set_target_properties(StaticDataLib PROPERTIES AUTOMOC ON)
target_link_libraries(StaticDataLib PRIVATE Qt6::Quick )

qt_add_qml_module(StaticDataLib
    URI StaticData
    VERSION 1.0
    RESOURCE_PREFIX "/qt/qml"
    QML_FILES
    ContentLoader.qml

    RESOURCES contacts.json schema.json response_1714067568845.json bwi_de_001_dev.json
)
