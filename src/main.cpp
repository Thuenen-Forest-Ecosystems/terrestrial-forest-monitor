#include <QGuiApplication>
#include <QQmlApplicationEngine>

#include <QCommandLineOption>
#include <QCommandLineParser>
#include <QLoggingCategory>

#include <QFontDatabase>
#include <QTranslator>
#include <QIcon>

using namespace Qt::StringLiterals;


int main(int argc, char *argv[])
{
  QGuiApplication app(argc, argv);

  QTranslator translator;
  // translator.load(QLocale(), QLatin1String("myapp"), QLatin1String("_"),
  // QLatin1String(":/i18n")); app.installTranslator(&translator);

  app.setOrganizationName("Thuenen");
  app.setOrganizationDomain("org.thuenen.de");
  app.setApplicationName("Terrestrial Forest Monitor");
  app.setWindowIcon(QIcon(":/resources/android_512_512.png"));
  app.setApplicationVersion("1.0.1");

  // Allow to load local files via XMLHttpRequest
  qputenv("QML_XHR_ALLOW_FILE_READ", QString("1").toUtf8());
  qputenv("QML_XHR_ALLOW_FILE_WRITE", QString("1").toUtf8());

  QQmlApplicationEngine engine;

  const QUrl url(u"qrc:/TFM/src/Main.qml"_qs);
  //const QUrl url(QStringLiteral("qrc:/Main.qml"));

  QObject::connect(
      &engine, &QQmlApplicationEngine::objectCreated, &app,
      [url](QObject *obj, const QUrl &objUrl) {
        if (!obj && url == objUrl)
          QCoreApplication::exit(-1);
      },
      Qt::QueuedConnection);

  engine.load(url);

  return  app.exec();
}
