import * as fs from 'fs'
import readline from 'readline'
import path from 'path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What week? \n', function (week) {
    const weekAssets = `./src/lib/week${week}-assets`;
    
    fs.readdir(weekAssets, (err, files) => {
        files.forEach(file => {
            if(file != '.DS_Store') {
                const exName = path.extname(file);
                file = file.replace(exName, exName.toLowerCase())
                const fileCamel = path.parse(file.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })).name;
                const importStatement = `import ${fileCamel} from '$lib/week${week}-assets/${file}?width=600&format=jpeg'`;
                console.log(importStatement);
            }
        });
    });
});

rl.on('close', function () {
  process.exit(0);
});

// import connectingAtmelToVCC from '$lib/week9-assets/connectingAtmelToVCC.jpg?width=600&format=jpeg&rotate=90'
//     import flashing from '$lib/week9-assets/flashing.jpg?width=600&format=jpeg&rotate=90'
//     import gettingValues from '$lib/week9-assets/gettingValues.jpg?width=600&format=jpeg'
//     import hallEffect from '$lib/week9-assets/hallEffect.jpg?width=600&format=jpeg&rotate=90'
//     import messOfCables from '$lib/week9-assets/messOfCables.jpg?width=600&format=jpeg&rotate=90'
//     import solderedBoard from '$lib/week9-assets/solderedBoard.jpg?width=600&format=jpeg'
//     import swdPinout from '$lib/week9-assets/swdPinout.jpg?width=600&format=jpeg&rotate=90'
//     import uploadingCode from '$lib/week9-assets/uploadingCode.jpg?width=600&format=jpeg'
//     import webserver from '$lib/week9-assets/webserver.jpg?quality=0.2&format=jpeg&rotate=90'