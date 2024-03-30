import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2

Column{

    default property alias data: inner.children
    property string headline
    property int margin: 10
    property int contentPadding: 10

    width: parent.width

    spacing: 5

    Item{height: margin; width:10}

    Label{
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
