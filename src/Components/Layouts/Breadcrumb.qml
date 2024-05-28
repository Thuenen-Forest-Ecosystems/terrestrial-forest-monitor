import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 1.3


Rectangle{

    required property StackView stackView
    property ListModel history: ListModel {}

    color: Style.lightPrimary

    visible: history.count > 1


    height: childrenRect.height

    Connections {
        target: stackView
        function onCurrentItemChanged(){
            _readStack();
        }
    }
    Component.onCompleted: _readStack()


    function _goTo(name, index) {


        const item = stackView.find(function(item) {
            return item.objectName == name;
        })


        stackView.pop(item, StackView.Immediate);
        
    }
    function _readStack(){

        history.clear()
        if(!stackView) return

        for(let i = 0; i < stackView.depth; i++){

            // Skip initial Item
            //if(i == 0) continue;

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

        
        Item{
            height: 1
            width: 10
        }

        Repeater{
            model: history
            delegate: GenericButton{
                required property int index
                required property string name

                Layout.alignment: Qt.AlignVCenter
                buttonText: index == 0 ? '' : name
                buttonIcon: index == 0 ? "e88a" : ""
                buttonEnabled: history.count -1 === index ? false : true
                fn: () => {
                    _goTo(name, index);
                }
            }
            
        }
    }
}
