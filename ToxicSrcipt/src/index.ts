// import './index.scss';
const fs = require(`fs-then`);
const path = require('path');
const startTime = new Date();
const filePath = path.join(__dirname, `history`, `test.txt`);
const humanizeDuration = require('humanize-duration');
let historyData = ``;

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err;
  }
  historyData = content;
}).then(() => {
  if (!historyData) {
    fs.writeFile(filePath, `${startTime}`, (err) => {
      if (err) {
        throw err;
      }
    }).then(
      console.log(`Why did you luch me fool!? You have nothing to do boomer?!`)
    );
  } else {
    fs.writeFile(filePath, `${startTime}`, (err) => {
      if (err) {
        throw err;
      }
    }).then(() => {
      fs.readFile(filePath, 'utf-8', (err, content) => {
        if (err) {
          throw err;
        }

        const dateDiff =
          new Date(content).getTime() - new Date(historyData).getTime();
        console.log(
          `Oh Gush... Here we go again! You already started me ${humanizeDuration(
            dateDiff
          )} ago!`
        );
      });
    });
  }
});
