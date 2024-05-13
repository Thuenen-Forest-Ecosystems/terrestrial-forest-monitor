import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts

// http://imaginativethinking.ca/bi-directional-data-binding-qt-quick/

Dialog {

    default property alias data: inner.children
    property bool showLogo: false

    id: root

    modal: true
    padding: 0


    contentItem: ColumnLayout{
        Item{
            visible: showLogo
            width: 377/2
            height: 151/2
            Image {
                id: logo
                source: Style.isDarkTheme == 1 ? "qrc:/qt/qml/Layouts/images/THUENEN_SCREEN_White.svg" : "qrc:/qt/qml/Layouts/images/THUENEN_SCREEN_RGB.svg"
                anchors.fill: parent
                fillMode: Image.PreserveAspectCrop
                sourceSize: Qt.size(377, 151)
                smooth: false
            }
        }
        ScrollView{
            //Layout.minimumWidth: 400
            Layout.maximumHeight: root.parent.height - logo.height
            Layout.leftMargin: showLogo ? 75 : 20
            Layout.topMargin: 20
            Layout.rightMargin: 20
            Layout.bottomMargin: 20
            Layout.fillWidth: true

            Column{
                id: inner

                spacing: 10

                //width: root.width - root.padding*2 - 75
                Layout.fillWidth: true
                Layout.leftMargin: 20

            }
        }
    }
}
