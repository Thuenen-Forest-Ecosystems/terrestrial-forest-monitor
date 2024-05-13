import QtQuick 6.2
import QtQuick.Controls.Material
import QtQuick.Layouts

/**
 * adapted from StackOverflow:
 * http://stackoverflow.com/questions/26879266/make-toast-in-android-by-qml
 */

/**
  * @brief An Android-like timed message text in a box that self-destroys when finished if desired
  */
Rectangle {

    /**
      * Public
      */

    /**
      * @brief Shows this Toast
      *
      * @param {string} text Text to show
      * @param {real} duration Duration to show in milliseconds, defaults to 3000
      */
    function show(text, duration = 3000, bgColor = "#00ff00") {

        message.text = text;
        if (typeof duration !== "undefined") { // checks if parameter was passed
            time = Math.max(duration, 2 * fadeTime);
        }
        else {
            time = defaultTime;
        }
        animation.start();
        backgroundColor = bgColor;
    }

    property bool selfDestroying: false  // whether this Toast will self-destroy when it is finished

    /**
      * Private
      */

    id: root

    readonly property real defaultTime: 3000
    property real time: defaultTime
    readonly property real fadeTime: 300
    property color backgroundColor: "#222222"

    property real margin: 10

    anchors {
        right: parent.right
        //left: parent.left
        margins: margin
    }

   
    radius: height / 2

    opacity: 0
    color: "#222"
    width: message.width + 2 * margin + 20
    height: message.height + 2 * margin

    
    RowLayout{
        anchors.fill: parent
        
        Rectangle {
            width: 10
            height: parent.height
            color: backgroundColor
            radius: root.height / 2
        }
        Rectangle {
            width: 10
            height: parent.height
            color: "#222"
            Layout.leftMargin: -10
        }
        Label {
            id: message
            wrapMode: Text.Wrap
            verticalAlignment: Text.AlignVCenter
            horizontalAlignment: Text.AlignHCenter
        }
    }
    

    SequentialAnimation on opacity {
        id: animation
        running: false


        NumberAnimation {
            to: 1
            duration: fadeTime
        }

        PauseAnimation {
            duration: time - 2 * fadeTime
        }

        NumberAnimation {
            to: 0
            duration: fadeTime
        }

        onRunningChanged: {
            if (!running && selfDestroying) {
                root.destroy();
            }
        }
    }
}