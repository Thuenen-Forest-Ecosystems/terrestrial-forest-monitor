import QtQuick 6.2
import QtQuick.Controls 6.2
import QtQuick.Layouts

import Generic
import Layouts

ChildLayout{
    objectName: "Components"
    breadcrumbStackView: stackViewMain
    useMap: false

    MainContent{
        anchors.fill: parent
        ComponentsList {
            id: componentsList
        }
    }
}
