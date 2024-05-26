import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import Layouts

Flow{
    required property variant row;
    required property var details;

    id: rowLayout
    spacing: 50
    rightPadding: 25
    leftPadding: 25
    topPadding: 10
    bottomPadding: 10

    Repeater{
        model: details
        delegate: ColumnLayout{
            spacing: 0
            Label{
                text: row[modelData[0].split('.').pop()]?.toString() || "-"
                font.bold: true
                font.pixelSize: 17
            }
            GenericDivider{margin:1}
            Label{
                text: modelData[1].name || `[${modelData[0]}]`
            }
        }
    }
}