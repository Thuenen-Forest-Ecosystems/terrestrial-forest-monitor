qt_add_library(LayoutsLib STATIC)

set_target_properties(LayoutsLib PROPERTIES AUTOMOC ON)
target_link_libraries(LayoutsLib PRIVATE Qt6::Quick )

set_source_files_properties(Style.qml PROPERTIES
    QT_QML_SINGLETON_TYPE TRUE
)

qt_add_qml_module(LayoutsLib
    URI Layouts
    VERSION 1.0
    RESOURCE_PREFIX "/qt/qml"
    QML_FILES SideBar.qml
    QML_FILES Wrapping.qml
    QML_FILES MainContent.qml
    QML_FILES Style.qml
    QML_FILES Cove.qml
    QML_FILES GenericDialog.qml
    QML_FILES GenericLine.qml
    QML_FILES GenericDivider.qml
    QML_FILES GenericCard.qml
    QML_FILES Icon.qml
    QML_FILES IconButton.qml
    QML_FILES Breadcrumb.qml
    QML_FILES BackPageLayout.qml

    RESOURCES fonts/calibri.ttf
    RESOURCES fonts/MaterialIcons.ttf
    images/THUENEN_SCREEN_Black.svg
    images/THUENEN_SCREEN_White.svg
    images/THUENEN_SCREEN_RGB.svg
    QML_FILES BreadcrumbBtn.qml
    QML_FILES RootLayout.qml
    QML_FILES ColorFieldBtn.qml
    QML_FILES ChildLayout.qml
    QML_FILES Components.qml
    QML_FILES GenericButton.qml




)
