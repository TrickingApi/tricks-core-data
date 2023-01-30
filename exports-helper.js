const fs = require('fs');

const trickFiles = [];

const writeStream = fs.createWriteStream('./tricks/index.ts', {flags: 'a'});

const formatTrickName = (file) => {
  let trickName = file.slice(0, -5);
  trickName = trickName.slice(0,1).toUpperCase() + trickName.slice(1);
  return trickName;
}

writeStream.write('import { Trick } from \'@trickingapi/tricking-ts\';');
// require all the json files and add them to the tricks object
fs.readdirSync('./tricks/data/').forEach(file => {
  if (file.endsWith('.json')) {
    const trickName = formatTrickName(file);
    writeStream.write(`export const tr${trickName}: Trick = require('./data/${file}');\n`);
    trickFiles.push(file);
  }
});

writeStream.close();
