const fs = require('fs');

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

fs.copyFile( `${srcDirectory}/playground.html`, `${destDirectory}/index.html`, (e) => _copied(e, 'index.html'))
fs.copyFile( `${srcDirectory}/playground.wasm`, `${destDirectory}/playground.wasm`, (e) => _copied(e, 'playground.wasm'))
fs.copyFile( `${srcDirectory}/playground.js`, `${destDirectory}/playground.js`, (e) => _copied(e, 'playground.js'))
fs.copyFile( `${srcDirectory}/qtloader.js`, `${destDirectory}/qtloader.js`, (e) => _copied(e, 'qtloader.js'))
fs.copyFile( `${srcDirectory}/qtlogo.svg`, `${destDirectory}/qtlogo.svg`, (e) => _copied(e, 'qtlogo.svg'))