# CI2027 Playground

This repository is a playground for the CI2027 modules/components, layouts and functionality.

## Components

[AuthOpenApi](https://github.com/Thuenen-Forest-Ecosystems/terrestrial-forest-monitor/tree/main/Components/AuthOpenApi)

## Build

```bash
cmake -DCMAKE_BUILD_TYPE:STRING=Release -S./ -B./build
make -C ./build
```

## Build js bundle

Run ```npm install``` and ```npm run build``` in the ```js``` folder before Running the QT app.

The built js file provides QT with "Turf.js | Advanced geospatial analysis" for calculating distances etc. and "Ajv JSON schema validator" for validating forms.


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

