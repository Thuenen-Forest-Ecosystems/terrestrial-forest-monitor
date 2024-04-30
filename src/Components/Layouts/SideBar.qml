import QtQuick 2.15
import QtQuick.Controls 6.2
import QtQuick.Layouts

Item {
    default property alias data: inner.children
    property variant topButtons: ListModel {}
    property variant bottomButtons: ListModel {}

    id: root

    width: 50
    height: parent.height

    Rectangle {
        id: body

        color: Material.primary
        anchors.fill: parent

        ColumnLayout{

            anchors.fill: parent

            ScrollView{
                Layout.fillHeight: true
                Layout.preferredWidth: root.width

                ColumnLayout{

                    anchors.fill: parent


                    Repeater{

                        model: topButtons
                        delegate: ToolButton {
                            required property string iconUrl
                            required property string toolTip
                            required property var onBtnClicked

                            icon.source: iconUrl
                            icon.color: "#333"

                            onClicked: function(e){
                                onBtnClicked(e)
                            }

                            ToolTip.delay: 1000
                            ToolTip.timeout: 5000
                            ToolTip.visible: hovered
                            ToolTip.text: qsTr(toolTip)
                        }

                    }
                }
            }

            Column{
                id: inner
                height: childrenRect.height
                width: parent.width
            }

        }
    }
}
