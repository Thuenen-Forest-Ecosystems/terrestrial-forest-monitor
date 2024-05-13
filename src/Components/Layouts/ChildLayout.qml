import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts 6.2

import Layouts 1.0
import Generic 1.0


Page {
    
    objectName: "ChildLayout"

    default property alias data: inner.children
    property StackView breadcrumbStackView

    ColumnLayout{
        anchors.fill: parent
        spacing: 0

        Breadcrumb{
            stackView: breadcrumbStackView

            Layout.fillWidth: true
            Layout.preferredHeight: childrenRect.height
        }

        GridLayout{

            Layout.fillHeight: true
            Layout.fillWidth: true

            rows: 1
            columns: 3

            rowSpacing: 0
            columnSpacing: 0

            MapWrapper{}

            Item{
                id: inner
                Layout.fillHeight: true
                Layout.fillWidth: true
            }
        }


    }
}
