import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import Layouts

Flow{

    property variant row;

    id: rowLayout
    spacing: 20

    Repeater{
        model: Object.entries(row)
        delegate: ColumnLayout{
            spacing: 0
            Label{
                text: modelData[1]
                font.bold: true
            }
            GenericDivider{margin:2}
            Label{
                text: modelData[0]
            }
        }
    }
}