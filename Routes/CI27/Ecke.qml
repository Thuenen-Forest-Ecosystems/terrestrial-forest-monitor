import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import Layouts
import SyncOpenApi 1.0
import StaticData

import "qrc:/Playground/js/build/bundle.js" as Bundle


ChildLayout{
    id: cornerRoot
    objectName: "Ecke: " + id.toString()
    breadcrumbStackView: stackViewMain

    property int id

    property var ajv
    property variant _schema
    property var _values
    property var _errors
    property string _key: "eal"


    function validate(){
        

        const validate = ajv.compile(_schema)

        const valid = validate(_values.values)

        if(valid === false)
            _errors = [...validate.errors]
        else
            _errors = []

        
        console.log('validate', valid, JSON.stringify(_errors));
        console.log('values', JSON.stringify(_values.values));
    }

    ContentLoader{
        id: contentLoader
        url: "qrc:/qt/qml/StaticData/schema.json"
        Component.onCompleted: {
            _values = {
                values:{
                    "eal": "Testtter",
                    "wzp4": "Hallo Echo",
                    "ran": {
                        "waldrand": "Test21",
                        "bestandesgrenze": "Test12"
                    }
                }
            };
            ajv = new Bundle.ajv({allErrors: true})
            Bundle.addFormats(ajv);
            _schema = contentLoader.json
            validate()
        }
    }

    ColumnLayout{
        anchors.fill: parent

        Label {
            id: headline
            text: qsTr("Ecke: " + " " + id.toString())
        }

        GenericDivider{margin: 0}

        RowLayout{

            Layout.fillHeight: false

            TabBar {
                id: tabBar
                Layout.fillHeight: true
                Layout.fillWidth: true
                Layout.alignment: Qt.AlignTop
                
                onCurrentIndexChanged: {
                    if(!_schema) return;

                    _key = Object.entries(_schema.properties)[tabBar.currentIndex][0]
                    validate()
                }
                Repeater {
                    model: Object.entries(contentLoader.json.properties)
                    TabButton {
                        text: modelData[1].title
                        
                    }
                }
            }
            SendButton{
                Layout.alignment: Qt.AlignTop
                Layout.rightMargin: 10
                Layout.leftMargin: 10
                errors: _errors
            }
        }

        MainContent{

            Layout.fillHeight: true
            Layout.fillWidth: true

            maxWidth: 2000

            GenericForm{

                anchors.fill: parent

                key: _key
                values: _values.values
                schema: _schema
                errors: _errors
                
            }
        }
    }
}

