const fs = require('fs');

rootDirectory="./"
srcDirectory="./build/WebAssembly_Qt_6_7_0_single_threaded-Release/"
destDirectory="./docs/"


function _copied(err, file = null) {
    if (err) {
        console.log(err)
    } else {
        console.log("Copied:", file)
    }

}
if (!fs.existsSync(destDirectory)){
    fs.mkdirSync(destDirectory);
}
if (!fs.existsSync(srcDirectory)){
    console.log(`Source directory "${srcDirectory}" does not exist`)
    return
}

//fs.copyFile( `${srcDirectory}tfm.html`, `${destDirectory}/index.html`, (e) => _copied(e, 'index.html'))
fs.copyFile( `${srcDirectory}tfm.wasm`, `${destDirectory}/tfm.wasm`, (e) => _copied(e, 'tfm.wasm'))
fs.copyFile( `${srcDirectory}tfm.js`, `${destDirectory}/tfm.js`, (e) => _copied(e, 'tfm.js'))
fs.copyFile( `${rootDirectory}resources/android_192_192.png`, `${destDirectory}/android_192_192.png`, (e) => _copied(e, 'android_192_192.png'))
//fs.copyFile( `${srcDirectory}qtloader.js`, `${destDirectory}/qtloader.js`, (e) => _copied(e, 'qtloader.js'))
//fs.copyFile( `${srcDirectory}qtlogo.svg`, `${destDirectory}/qtlogo.svg`, (e) => _copied(e, 'qtlogo.svg'))