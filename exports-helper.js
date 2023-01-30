const fs = require('fs');

const trickFiles = [];

const writeStream = fs.createWriteStream('./tricks/index.js', {flags: 'a'});
// require all the json files and add them to the tricks object
fs.readdirSync('./tricks').forEach(file => {
  if (file.endsWith('.json')) {
    let trickName = file.slice(0, -5);
    trickName = trickName.slice(0,1).toUpperCase() + trickName.slice(1);
    writeStream.write(`export const tr${trickName} = require('${file}');\n`);
    trickFiles.push(file);
  }
});

writeStream.close();
