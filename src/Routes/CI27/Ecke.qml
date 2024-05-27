import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import Layouts
import SyncOpenApi 1.0
import StaticData

import "qrc:/TFM/js/build/ajv.cjs.js" as Bundle
import "qrc:/TFM/js/build/addFormats.cjs.js" as AddFormats


Item{
    id: cornerRoot
    objectName: "Ecke: " + id.toString()
    //breadcrumbStackView: stackViewMain

    property int id

    property var ajv
    property variant _schema
    property var _values
    property var _errors
    property string _key: "eal"

    property string parentTableName: "b3_ecke"
    property variant parentRows: []
    property var parentRowsDetails: []


    function validate(){
        

        const validate = ajv.compile(_schema)

        const valid = validate(_values.values)

        if(valid === false)
            _errors = [...validate.errors]
        else
            _errors = []

        
        console.log('values', JSON.stringify(_errors), JSON.stringify(_values.values));
    }

    function traverse(o, func) {
        for (var i in o) {
            func.apply(this,[i,o[i]]);  
            if (o[i] !== null && typeof(o[i])=="object") {
                //going one step down in the object tree!!
                traverse(o[i],func);
            }
        }
    }

    Component.onCompleted: {
        parentRows = SyncUtils.select(parentTableName, `WHERE enr = ${id}`);
        const parentRowsDetailsObject = JSON.parse(settings.value(schemaName));
        parentRowsDetails = Object.entries(parentRowsDetailsObject.properties.eckenList.items.properties)

        // REPLACE BY
        _schema = parentRowsDetailsObject.properties.eckeForm
   
        _values =  {
            values:{
                /*"eal": "Testtter",
                "wzp4": "Hallo Echo",
                "ran": {
                    "waldrand": "Test21",
                    "bestandesgrenze": "Test12"
                }*/
            }
        };
        ajv = new Bundle.ajv({allErrors: true, strict: false})

        //console.log('Bundle', AddFormats, AddFormats.addFormats);

        //AddFormats(ajv);
        
        for(const property in _schema.properties){
            delete _schema.properties[property].required
        }
        traverse(_schema, (key, value) => {
            if(value.hasOwnProperty('required') && value.type !== 'object'){
                delete value.required
            }
        })
        console.log(JSON.stringify(_schema));
        validate()
    }
    

    ColumnLayout{
        anchors.fill: parent

        RowLayout{
            Layout.fillWidth: true
            Layout.alignment: Qt.AlignHCenter

            Item{
                width: 10
            }
            GenericCard{
                Layout.fillWidth: true
                headline: "Ecke: " + id.toString()
                GenericLine{
                    TableRowToLayout{
                        Layout.fillWidth: true
                        row: parentRows[0]
                        details: parentRowsDetails
                    }
                }
            }
            Item{
                width: 10
            }
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
                    model: Object.entries(_schema.properties)
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
                visible: _schema && _values.values && _errors  && _key
                anchors.fill: parent

                key: _key
                values: _values.values
                schema: _schema
                errors: _errors
                
            }
        }
        
    }
}

