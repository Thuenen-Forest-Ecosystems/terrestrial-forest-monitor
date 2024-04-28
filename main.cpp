#include <QGuiApplication>
#include <QQmlApplicationEngine>

#include <QFontDatabase>
#include <QTranslator>
#include <QIcon>



int main(int argc, char *argv[]) {
  QGuiApplication app(argc, argv);

  // QTranslator translator;
  // translator.load(QLocale(), QLatin1String("myapp"), QLatin1String("_"),
  // QLatin1String(":/i18n")); app.installTranslator(&translator);

  app.setOrganizationName("Thuenen");
  app.setOrganizationDomain("org.thuenen.de");
  app.setApplicationName("Waldmonitoring");
  app.setWindowIcon(QIcon(":/resources/android_512_512.png"));

  // Allow to load local files via XMLHttpRequest
  qputenv("QML_XHR_ALLOW_FILE_READ", QString("1").toUtf8());
  qputenv("QML_XHR_ALLOW_FILE_WRITE", QString("1").toUtf8());

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


  //std::string token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9.eyJpc3MiOiJhdXRoMCIsInNhbXBsZSI6InRlc3QifQ.lQm3N2bVlqt2-1L-FsOjtR6uE-L4E9zJutMWKIe1v1M";
  //auto decoded = jwt::decode(token);
  //for(auto& e : decoded.get_payload_json())
  //      std::cout << e.first << " = " << e.second << std::endl;

  return  app.exec();
}
