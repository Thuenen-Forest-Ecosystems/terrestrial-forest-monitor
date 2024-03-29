pragma Singleton
import QtQuick 2.0

QtObject {
    property var listenerFunctions: [];
    property int latestLogin: 10

    onLatestLoginChanged:{
        for(let i = 0; i < listenerFunctions.length; i++){
            listenerFunctions[i]();
        }
    }

    function addListener(fn){
        listenerFunctions.push(fn)
    }
}
