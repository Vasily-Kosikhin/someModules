'use strict';
const fs = require('fs');
const path = require('path');
const { isFunctionExpression } = require('typescript');
const getAverageColor = require('fast-average-color-node').getAverageColor;
const imageName = process.env.PIC;
const filePath = path.join(__dirname, './imgs', `${imageName}`);

function getColor(x) {
  if (!x) {
    throw new Error(
      'Не указан параметр PIC=... \n Укажите в виде PIC=black.jpg'
    );
  }
  fs.access(filePath, fs.F_OK, (err) => {
    if (err) {
      console.error(`Картинка ${imageName} не найдена`, err);
      return;
    }
    getAverageColor(filePath).then((color) => {
      console.log('Средний цвет картинки :', color.rgb);
    });
    //file exists
  });
}

getColor(imageName);
