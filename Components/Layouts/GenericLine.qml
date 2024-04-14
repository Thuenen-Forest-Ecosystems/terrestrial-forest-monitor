import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2



    RowLayout {
        default property alias data: inner.children

        required property string title;
        property string subTitle;
        property string description;

        property string leadingCodePoint;

        property bool indent: true

        width: parent.width

        Item{
            visible: leadingCodePoint ? true : false
            width: leadingCodePoint ? 50 : 10
            Layout.alignment: Qt.AlignTop

            Icon {

                codePoint: leadingCodePoint
            }
        }


        Column{

            Layout.fillWidth: true
            Label {
                text: title
                font.pixelSize: 20
                elide: Text.ElideRight
                width: parent.width
            }
            Rectangle{height: 3;width: 1; opacity: 0}
            Label {
                visible: subTitle ? true : false
                text: subTitle
                font.weight: Font.Bold
                elide: Text.ElideRight
                width: parent.width
            }
            Rectangle{height: 8;width: 1; opacity: 0; visible: subTitle ? true : false}
            Label {
                visible: description ? true : false
                text: description
                width: parent.width
                wrapMode: Text.WordWrap
            }
        }

        Row{
            id: inner
        }
        Item{
            width: 10
        }
    }



