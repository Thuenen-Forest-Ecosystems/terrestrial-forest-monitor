import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2


Pane{
    default property alias data: inner.children
    property int maxWidth: 800
    property int minWidth: 400

    padding: 0

    id: canvas

    ScrollView {

        width: canvas.width
        height: canvas.height

        ScrollBar.vertical.policy: ScrollBar.AsNeeded
        ScrollBar.horizontal.policy: ScrollBar.AsNeeded

        ColumnLayout{
            width: canvas.width
            height: canvas.height // MAYBE DON'T NEED THIS
            spacing: 5

            Column{

                id: inner

                Layout.fillWidth: true
                Layout.alignment: Qt.AlignHCenter

                Layout.minimumWidth: minWidth
                Layout.maximumWidth: maxWidth

                Layout.leftMargin: 10
                Layout.rightMargin: 10

            }
        }
    }
}
