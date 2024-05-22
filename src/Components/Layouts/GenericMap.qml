import QtQuick
import QtLocation
import QtPositioning

// https://doc.qt.io/qt-6/location-plugin-osm.html

Rectangle {
    color: "lightgrey"
    
    Plugin {
        id: mapPlugin
        name: "osm"

        PluginParameter { name: "osm.mapping.highdpi_tiles"; value: true }
        PluginParameter { name: "osm.mapping.cache.disk.cost_strategy"; value: "LRU" }
        PluginParameter { name: "osm.mapping.cache.disk.cost_strategy.lru.size"; value: 100 }
        PluginParameter { name: "osm.mapping.providersrepository.disabled"; value: true }
        
        PluginParameter { name: "osm.mapping.offline.directory"; value: "offline" }
        PluginParameter { name: "osm.mapping.offline.mappingtiles"; value: "osm_tiles" }
        PluginParameter { name: "osm.mapping.offline.mappingtiles.url"; value: "https://tile.openstreetmap.org/%1/%2/%3.png" }
        PluginParameter { name: "osm.mapping.offline.mappingtiles.zmin"; value: 4 }
        PluginParameter { name: "osm.mapping.offline.mappingtiles.zmax"; value: 19 }
    }

    Map {
        id: map
        anchors.fill: parent
        plugin: mapPlugin
        center: QtPositioning.coordinate(59.91, 10.75)
        zoomLevel: 14
        property geoCoordinate startCentroid

        PinchHandler {
            id: pinch
            target: null
            onActiveChanged: if (active) {
                map.startCentroid = map.toCoordinate(pinch.centroid.position, false)
            }
            onScaleChanged: (delta) => {
                map.zoomLevel += Math.log2(delta)
                map.alignCoordinateToPoint(map.startCentroid, pinch.centroid.position)
            }
            onRotationChanged: (delta) => {
                map.bearing -= delta
                map.alignCoordinateToPoint(map.startCentroid, pinch.centroid.position)
            }
            grabPermissions: PointerHandler.TakeOverForbidden
        }
        WheelHandler {
            id: wheel
            // workaround for QTBUG-87646 / QTBUG-112394 / QTBUG-112432:
            // Magic Mouse pretends to be a trackpad but doesn't work with PinchHandler
            // and we don't yet distinguish mice and trackpads on Wayland either
            acceptedDevices: Qt.platform.pluginName === "cocoa" || Qt.platform.pluginName === "wayland"
                             ? PointerDevice.Mouse | PointerDevice.TouchPad
                             : PointerDevice.Mouse
            rotationScale: 1/120
            property: "zoomLevel"
        }
        DragHandler {
            id: drag
            target: null
            onTranslationChanged: (delta) => map.pan(-delta.x, -delta.y)
        }
        Shortcut {
            enabled: map.zoomLevel < map.maximumZoomLevel
            sequence: StandardKey.ZoomIn
            onActivated: map.zoomLevel = Math.round(map.zoomLevel + 1)
        }
        Shortcut {
            enabled: map.zoomLevel > map.minimumZoomLevel
            sequence: StandardKey.ZoomOut
            onActivated: map.zoomLevel = Math.round(map.zoomLevel - 1)
        }
    }
}