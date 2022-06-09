'use strict';
// RUN node ./src/index.js --LAND=UK or LAND=UK
// Потому узнал, что можно через let parament = process.env.LAND но было уже поздно

const phrases = require('./translator');
const args = require('yargs').argv;
const defaulLang = 'RU';
console.log(`args :`, args);
console.log(`args[_] :`, args[`_`]);
let lang;

if (args['_'][0]) {
  if (args['LAND']) {
    lang = args['LAND'];
  } else {
    lang = args['_'][0].slice(-2);
  }
} else {
  lang = defaulLang;
}

console.log(phrases[lang]);
