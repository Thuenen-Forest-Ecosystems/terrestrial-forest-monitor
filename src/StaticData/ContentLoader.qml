import QtQuick 2.15


Item {

    property string url;
    property var model: ListModel {}
    property variant json

    function loader(_url, cb){
        var xhr = new XMLHttpRequest;
        xhr.open("GET", _url, false)

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if(xhr.status !== 200) {
                     cb({error: "wrong status", status: xhr.status});
                    return
                }

                try{
                    var data = JSON.parse(xhr.responseText);
                } catch(e) {
                    cb({error: e});
                    return
                }
                
                json = data;
                if(cb) {
                    cb(data);
                    return;
                }

                model.clear();

                for (var i in data) {
                    const obj2Add = {}
                    for (const [key, value] of Object.entries(data[i])) {
                      obj2Add[key] = value
                    }
                    model.append(obj2Add);
                }
            }
        }
        xhr.send();
    }
    Component.onCompleted: {
        loader(url)
    }
}
