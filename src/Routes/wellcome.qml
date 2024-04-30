import QtQuick 2.15
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2

import Layouts
import AuthOpenApi

RootLayout{

    objectName: 'Wellcome'


    AuthWrapper{
        id: wrapper
        visible: false
    }


    GridLayout{

        anchors.fill: parent

        columns: 2
        rows: 2
        rowSpacing: 0
        columnSpacing: 0

        Rectangle{
            visible: applicationWindow.width > 390
            color: "transparent"
            Layout.fillHeight: true
            Layout.fillWidth: true

            Layout.verticalStretchFactor: 1
            Layout.horizontalStretchFactor: 1

            Layout.rowSpan: 2
        }

        Rectangle{
            color: "transparent"
            Layout.fillHeight: true
            Layout.fillWidth: true

            Layout.verticalStretchFactor: 5
            Layout.horizontalStretchFactor: 1
        }
        Rectangle{
            color: "transparent"
            Layout.fillHeight: true
            Layout.fillWidth: true

            Layout.minimumHeight: 200
            Layout.minimumWidth: 300

            Layout.verticalStretchFactor: 5
            Layout.horizontalStretchFactor: 5

            GridLayout{

                anchors.fill: parent

                columns: applicationWindow.width > 700 ? 3 : applicationWindow.width > 390 ? 2 : 1
                rowSpacing: applicationWindow.width < 390 ? 10 : 0
                columnSpacing: 0



                ColorFieldBtn{
                    bgColor: "#008CD2"

                    text: ""
                    enabled: false


                    Layout.fillHeight: true
                    Layout.fillWidth: true

                    Layout.minimumWidth: 100

                    Layout.preferredHeight: parent.height/2
                    Layout.preferredWidth: parent.width/3

                }
                ColorFieldBtn{
                    bgColor: "#00AAAA"

                    onClicked: {
                        wrapper.executeIfLoggedIn(
                            () => {
                                stackViewMain.push("qrc:/qt/qml/Routes/CI27/Traktliste.qml", StackView.Immediate)
                            }
                        )
                    }

                    text: "Kohlenstoffinventur"
                    enabled: true

                    Layout.fillHeight: true
                    Layout.fillWidth: true

                    Layout.minimumWidth: 100

                    Layout.preferredHeight: parent.height/2
                    Layout.preferredWidth: parent.width/3

                }
                ColorFieldBtn{
                    bgColor: "#78BE1E"

                    text: ""
                    enabled: false

                    Layout.fillHeight: true
                    Layout.fillWidth: true

                    Layout.minimumWidth: 100

                    Layout.preferredHeight: parent.height/2
                    Layout.preferredWidth: parent.width/3

                }

                ColorFieldBtn{
                    bgColor: "#00A0E1"

                    text: ""
                    enabled: false

                    Layout.fillHeight: true
                    Layout.fillWidth: true

                    Layout.minimumWidth: 100

                    Layout.preferredHeight: parent.height/2
                    Layout.preferredWidth: parent.width/3

                }

                ColorFieldBtn{
                    bgColor: "#00AA82"

                    text: ""
                    enabled: false

                    Layout.fillHeight: true
                    Layout.fillWidth: true

                    Layout.minimumWidth: 100

                    Layout.preferredHeight: parent.height/2
                    Layout.preferredWidth: parent.width/3

                }

                ColorFieldBtn{
                    bgColor: "#008CD2"

                    onClicked: {
                        stackViewMain.push("qrc:/qt/qml/Layouts/Components.qml", StackView.Immediate)
                    }

                    text: "Components"
                    enabled: true

                    Layout.fillHeight: true
                    Layout.fillWidth: true

                    Layout.minimumWidth: 100

                    Layout.preferredHeight: parent.height/2
                    Layout.preferredWidth: parent.width/3

                }
            }
        }
    }

}

