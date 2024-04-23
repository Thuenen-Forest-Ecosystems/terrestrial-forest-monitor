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
    QML_FILES 
        SideBar.qml
        Wrapping.qml
        MainContent.qml
        Style.qml
        Cove.qml
        GenericDialog.qml
        GenericLine.qml
        GenericDivider.qml
        GenericCard.qml
        Icon.qml
        IconButton.qml
        Breadcrumb.qml
        BackPageLayout.qml
        BreadcrumbBtn.qml
        RootLayout.qml
        ColorFieldBtn.qml
        ChildLayout.qml
        Components.qml
        GenericButton.qml
        GenericTextField.qml
        GenericForm.qml
        GenericForm/TextField.qml

    RESOURCES 
        fonts/calibri.ttf 
        fonts/MaterialIcons.ttf
        images/THUENEN_SCREEN_Black.svg
        images/THUENEN_SCREEN_White.svg
        images/THUENEN_SCREEN_RGB.svg
        
)
