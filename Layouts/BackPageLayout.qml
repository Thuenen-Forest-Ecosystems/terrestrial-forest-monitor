import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2

import Layouts 1.0
import Generic 1.0


Page {

    objectName: "BackPageLayout"

    default property alias data: inner.children
    property StackView breadcrumbStackView: stackViewStart


    header: ToolBar{
        BackBar {
            id: backBar
            title: "Settings"
        }
    }

    ColumnLayout{
        anchors.fill: parent
        spacing: 0

        Breadcrumb{
            stackView: breadcrumbStackView

            Layout.fillWidth: true
            Layout.preferredHeight: childrenRect.height
        }

        Item{
            id: inner
            Layout.fillHeight: true
            Layout.fillWidth: true
        }


    }



}
