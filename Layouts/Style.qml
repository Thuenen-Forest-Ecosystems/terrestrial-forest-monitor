// Style.qml
pragma Singleton
import QtQuick 6.2
import QtQuick.Layouts 6.2
import QtQuick.Controls 6.2
import QtCore

Item {
    id: style

    signal themeChanged(newTheme: real)

    default property alias setting: styleSettings

    property real isDarkTheme: 0

    property bool settingsLoaded: false
    property var defaultFont;

    property color lightPrimary: "#E0F1CB"

    function emitThemeChanged(){
        style.themeChanged(isDarkTheme ?  Material.Dark : Material.Light);
    }


    function toggleTheme(themeState){
        if (!settingsLoaded) return;


        isDarkTheme = themeState

        styleSettings.setValue('theme', themeState ?  Material.Dark : Material.Light)

        emitThemeChanged();
    }


    Component.onCompleted: {
        var newTheme = styleSettings.value('theme', 0)

        isDarkTheme = JSON.parse(newTheme)

        emitThemeChanged();

        settingsLoaded = true;
    }


    Settings {
        id: styleSettings
    }
}
