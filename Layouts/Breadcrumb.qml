import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 1.3


Rectangle{

    required property StackView stackView
    property ListModel history: ListModel {}

    color: Style.lightPrimary

    height: childrenRect.height

    Connections {
        target: stackView
        function onCurrentItemChanged(){
            _readStack();
        }
    }
    Component.onCompleted: _readStack()

    function _change(){
        console.log('change bread');
    }

    function _goTo(name, index) {


        const item = stackView.find(function(item) {
            return item.objectName == name;
        })


        stackView.pop(item, StackView.Immediate);
        /*return;


        for(let i = index+1; i < stackView.depth; i++){
            console.log(i);
            const item = stackView.get(i);

            if(item){
                console.log(item);
                stackView.pop(item, StackView.Immediate);
            }
        }*/
    }
    function _readStack(){

        history.clear()
        if(!stackView) return

        for(let i = 0; i < stackView.depth; i++){

            // Skip initial Item
            if(i == 0) continue;

            const item = stackView.get(i);
            if(item)
                history.append({
                    name: item.objectName || "[SET objectName]"
                })
            else{
                history.append({
                    name: "[SET objectName]"
                })
                console.log();
            }
        }
    }

    Row{

        height: childrenRect.height
        width: parent.width

        spacing: 10

        visible: true

        Item{
            height: 1
            width: 10
        }

        /*IconButton{
            codePoint: "e88a"
            iconColor: "#333"
            toolTip: "Startseite"
            onClicked: function(e){
                _infoDialog(e)
            }
        }*/

        Repeater{
            model: history
            delegate: BreadcrumbBtn{
                required property int index
                required property string name



                enabled: history.count -1 === index ? false : true

                text: name
                flat: true

                onClicked: {
                   _goTo(name, index);
                }

            }
        }
    }
}
