import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2


Pane{
    default property alias data: inner.children

    padding: 0

    id: canvas

    anchors.fill: parent

    ScrollView {

        width: canvas.width
        height: canvas.height

        ScrollBar.vertical.policy: ScrollBar.AsNeeded
        ScrollBar.horizontal.policy: ScrollBar.AsNeeded



        ColumnLayout{
            width: canvas.width
            spacing: 5

            Column{

                id: inner

                Layout.fillWidth: true
                Layout.alignment: Qt.AlignHCenter

                Layout.minimumWidth: 300
                Layout.maximumWidth: 800

                Layout.leftMargin: 10
                Layout.rightMargin: 10

            }
        }
    }
}
