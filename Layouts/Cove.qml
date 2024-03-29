import QtQuick 2.15
import QtQuick.Shapes 1.6

Shape {

    property string bgColor: "blue"
    property real coveSize: 40


    width: coveSize
    height: coveSize

    ShapePath {
        startX: 0; startY: 0
        fillColor: bgColor

        strokeWidth: 0
        strokeColor: bgColor

        PathLine {
            x: coveSize; y: 0
        }
        PathQuad { x: 0; y: coveSize; controlX: 0; controlY: 0 }
        PathLine {
            x: 0; y: 0
        }
    }
}
