import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

import Layouts

// https://doc.qt.io/qt-6/qtqml-javascript-dynamicobjectcreation.html

Repeater {
    id: root
    width: parent.width
    model: ListModel {
        Component.onCompleted: {
            let components = [
                    {
                        name: "AuthOpenAPI -Authentication width Open-Api",
                        pages: [
                            {
                                btnLabel: "AuthOpenApi -> AuthWrapper.qml",
                                qmlFile:"qrc:/qt/qml/AuthOpenApi/AuthWrapper.qml"
                            },
                            {
                                btnLabel: "AuthOpenApi -> AuthenticationButton.qml",
                                qmlFile:"qrc:/qt/qml/AuthOpenApi/AuthenticationButton.qml"
                            },
                            {
                                btnLabel: "AuthOpenApi -> LogiForm.qml",
                                qmlFile:"qrc:/qt/qml/AuthOpenApi/LoginForm.qml"
                            }
                        ]
                    },
                    {
                        name: "SyncOpenApi - Synchronization width Open-Api",
                        pages: [
                            {
                                btnLabel: "SyncButton.qml",
                                qmlFile:"qrc:/qt/qml/SyncOpenApi/SyncButton.qml"
                            },
                            {
                                btnLabel: "SyncTables.qml",
                                qmlFile:"qrc:/qt/qml/SyncOpenApi/SyncTables.qml"
                            }
                        ]
                    },
                    /*{
                        name: "Gnss",
                        pages: [
                            {
                                btnLabel: "Bluetest.qml",
                                qmlFile:"qrc:/qt/qml/Gnss/Bluetest.qml"
                            }
                        ]
                    },*/
                    {
                        name: "Layouts",
                        pages: [
                            {
                                btnLabel: "Layouts/MainContent.qml",
                                qmlFile:"qrc:/qt/qml/Layouts/MainContent.qml"
                            },
                            {
                                btnLabel: "Layouts/SideBar.qml",
                                qmlFile:"qrc:/qt/qml/Layouts/SideBar.qml"
                            },
                            {
                                btnLabel: "Layouts/Wrapping.qml",
                                qmlFile:"qrc:/qt/qml/Layouts/Wrapping.qml"
                            }
                        ]
                    }
                ]
            append(components) // appending a whole array makes each index into a ListElement at the top level
        }
    }

    delegate: Column{
        id: col
        width: root.width

        Item {
            height: 25
            width: 1
        }
        Label {
            text: name
            font.pixelSize: 30
            font.family: defaultFont.font
            elide: Text.ElideRight
            width: parent.width
        }
        Item {
            height: 5
            width: 1
        }
        Flow{
            width: parent.width
            anchors.margins: 4
            spacing: 10
            Repeater{
                model: pages
                Button {
                    text: btnLabel
                    Connections {
                        function onClicked(){
                            stackViewStart.push("BasicPage.qml", {
                                childElement: qmlFile,
                                label: btnLabel,
                            }, StackView.Immediate)
                        }
                    }
                }
            }
        }

        Item {
            height: 25
            width: 1
        }
        Rectangle{
            width: root.width
            height: 1
            color: "#333"
        }

    }
}


