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
                                btnLabel: "AuthWrapper.qml",
                                qmlFile:"qrc:/qt/qml/AuthOpenApi/AuthWrapper.qml"
                            },
                            {
                                btnLabel: "AuthenticationButton.qml",
                                qmlFile:"qrc:/qt/qml/AuthOpenApi/AuthenticationButton.qml"
                            },
                            {
                                btnLabel: "LogiForm.qml",
                                qmlFile:"qrc:/qt/qml/AuthOpenApi/LoginForm.qml"
                            },
                            {
                                btnLabel: "TestToken.qml",
                                qmlFile:"qrc:/qt/qml/AuthOpenApi/TestToken.qml"
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
                            },
                            {
                                btnLabel: "CreateSchema.qml",
                                qmlFile:"qrc:/qt/qml/SyncOpenApi/CreateSchema.qml"
                            }
                        ]
                    },
                    {
                        name: "NetworkState - Checks on- / offline State",
                        pages: [
                            {
                                btnLabel: "NetworkStateQml.qml",
                                qmlFile:"qrc:/qt/qml/NetworkState/NetworkStateQml.qml"
                            }
                        ]
                    },
                ]
            append(components) // appending a whole array makes each index into a ListElement at the top level
        }
    }

    delegate: GenericCard{
        headline: name
        contentPadding: 10

        Flow{
            Layout.fillWidth: true
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
    }

    /*delegate: Column{
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

    }*/
}


