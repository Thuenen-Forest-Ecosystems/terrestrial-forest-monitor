import QtQuick 2.15
import QtQuick.Controls
import QtQuick.Layouts

import Layouts

Flow{
    required property string tableName;
    required property variant row;
    required property var details;

    id: rowLayout
    spacing: 20

    Repeater{
        model: details
        delegate: ColumnLayout{
            spacing: 0
            Label{
                text: row[modelData[0].split('.').pop()]
                font.bold: true
            }
            GenericDivider{margin:2}
            Label{
                text: modelData[1].name || `[${modelData[0]}]`
            }
        }
    }
}