import QtQuick 2.15
import QtQuick.Controls

import Layouts


ChildLayout{
    objectName: "Traktliste"
    breadcrumbStackView: stackViewMain

    MainContent{
        Label {
            id: name
            text: qsTr("Traktliste")
        }
        GenericDivider{}
    }
}

