import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import Layouts
import SyncOpenApi 1.0
import StaticData

import "qrc:/TFM/js/build/ajv.cjs.js" as Bundle

Item{
    id: root 

    objectName: "Ecke: " + id.toString()
    //breadcrumbStackView: stackViewMain

    property int id

    property var ajv
    property var schema
    property var values
    property variant errors:  []

    function validate(){

        const validate = ajv.compile(schema)

        const valid = validate(values.values)

        errors = valid ? [] : validate.errors;

    }

    ContentLoader{
        id: contentLoader
        url: "qrc:/qt/qml/StaticData/schema.json"
        Component.onCompleted: {
            values = {
                values:{
                    "eal": {
                        "eal1": "Testtter"
                    }
                }
            };
            ajv = new Bundle.ajv({allErrors: true})
            Bundle.addFormats(ajv);
            schema = contentLoader.json
            validate()
        }
    }

    ColumnLayout{
        id: columnLayout
        anchors.fill: parent
        spacing: 0

        Label {
            id: name
            text: qsTr(root.objectName)
        }

        GenericDivider{margin: 0}

        TabBar {
            id: bar
            width: parent.width
            Repeater {
                model: Object.entries(contentLoader.json.properties)
                TabButton {
                    text: modelData[1].title
                    width: Math.max(100, bar.width / 5)
                }
            }
        }

        MainContent{

            Layout.fillHeight: true
            Layout.fillWidth: true
            
            maxWidth: 2000

            GenericForm{

                Layout.fillHeight: true
                Layout.fillWidth: true

                schema: schema
                errors: errors

                id: genericForm
            }
            
            
        }
    }
}

