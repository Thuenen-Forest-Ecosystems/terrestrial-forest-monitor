import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2

Column{

    id: card

    default property alias data: inner.children
    property string headline
    property int margin: 10
    property int contentPadding: 10

    property var clicked

    width: parent.width
    //Layout.fillWidth: true

    spacing: 5

    Item{height: margin; width:10}

    Label{
        visible: headline
        text: headline
        font.weight: Font.Bold
        x: 20
        elide: Text.ElideRight
        width: parent.width
    }

    Rectangle {


        width: parent.width
        height: childrenRect.height

        radius: 20

        color: Style.isDarkTheme ? "#111" : '#fff'

        MouseArea {
            anchors.fill: parent
            cursorShape: card.clicked ? Qt.PointingHandCursor : Qt.ArrowCursor
            onClicked: function(){
                if (card.clicked) card.clicked()
            }
        }

        ColumnLayout{
            id:outer

            width: parent.width

            Item{height: 10}

            ColumnLayout{
                id: inner
                Layout.fillWidth: true
                Layout.leftMargin: contentPadding
                Layout.rightMargin: contentPadding
            }

            Item{height: 10}

        }
    }
    Item{height: margin; width:10}
}
