# Terrestrial Forest Monitor (TFM)


## Components

[AuthOpenApi](https://github.com/Thuenen-Forest-Ecosystems/terrestrial-forest-monitor/tree/main/Components/AuthOpenApi)

## Install & Run
### Build C++ Dependencies
We uses [conan](https://conan.io/) package manager by default. But feel free to use any package manager you like.

```bash
$ conan install conanfile.txt --build=missing
```

### Build JavaScript Dependencies

Run ```npm install``` and ```npm run build``` in the ```js``` folder before Running the QT app.

The built js file provides QT with "Turf.js | Advanced geospatial analysis" for calculating distances etc. and "Ajv JSON schema validator" for validating forms.

### Build

```bash
cmake -DCMAKE_BUILD_TYPE:STRING=Release -S./ -B./build
make -C ./build

./linuxdeploy-static-x86_64.AppImage --appdir AppDir --executable ./build/tfm --output appimage

```

## Additional Translations
lupdate ./src -ts i18n/qml_de.ts ^C
lrelease i18n/qml_en.ts


## Setup in Qt Creator
The current setup is made to be edited in QT-Creator.

*Steps to get started:*
1. Clone Repository
2. Select "Open Project..."
3. Select "CMakeLists.txt" from the explorer
4. Add "Build & Run" devices
5. Select "Build" -> "Run" or Ctr+r to run the project.

## License
This project is licensed under the [GNU General Public License v3.0](https://github.com/Thuenen-Forest-Ecosystems/terrestrial-forest-monitor/blob/main/LICENSE.md).

