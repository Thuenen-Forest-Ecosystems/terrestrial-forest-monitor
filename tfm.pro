TEMPLATE = app
TARGET = heartrate-game

QT += qml quick bluetooth

CONFIG += qmltypes
QML_IMPORT_NAME = TFM
QML_IMPORT_MAJOR_VERSION = 1

HEADERS += \


SOURCES += src/main.cpp \

qml_resources.files = \
    src/Main.qml

qml_resources.prefix = /qt/qml/tfm

RESOURCES = qml_resources

#ios: QMAKE_INFO_PLIST = ../shared/Info.qmake.ios.plist
#macos: QMAKE_INFO_PLIST = ../shared/Info.qmake.macos.plist

#target.path = $$[QT_INSTALL_EXAMPLES]/bluetooth/heartrate-game
#INSTALLS += target
