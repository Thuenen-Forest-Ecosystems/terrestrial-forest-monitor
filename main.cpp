#include <QGuiApplication>
#include <QQmlApplicationEngine>

#include <QFontDatabase>
#include <QTranslator>




int main(int argc, char *argv[]) {
  QGuiApplication app(argc, argv);

  // QTranslator translator;
  // translator.load(QLocale(), QLatin1String("myapp"), QLatin1String("_"),
  // QLatin1String(":/i18n")); app.installTranslator(&translator);

  app.setOrganizationName("Thuenen");
  app.setOrganizationDomain("org.thuenen.de");
  app.setApplicationName("Waldmonitoring");

  // Allow to load local files via XMLHttpRequest
  qputenv("QML_XHR_ALLOW_FILE_READ", QString("1").toUtf8());

  QQmlApplicationEngine engine;

  const QUrl url(u"qrc:/Playground/Main.qml"_qs);
  // const QUrl url(QStringLiteral("qrc:/qt/qml/translated/Main.qml"));
  QObject::connect(
      &engine, &QQmlApplicationEngine::objectCreated, &app,
      [url](QObject *obj, const QUrl &objUrl) {
        if (!obj && url == objUrl)
          QCoreApplication::exit(-1);
      },
      Qt::QueuedConnection);

  engine.load(url);

  return app.exec();
}
