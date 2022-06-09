'use strict';
const path = require('path');
const fs = require('fs');
const http = require('http');
const url = require('url');
let stats = { like: 0, dislike: 0 };
const fineRequest = { status: 'ok' };

const server = new http.Server();

server.on('request', function (req, res) {
  switch (req.url) {
    case '/like':
      stats.like += 1;
      fs.readFile(path.join(__dirname, 'public', 'main.html'), (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      break;
    case '/dislike':
      stats.dislike += 1;
      fs.readFile(path.join(__dirname, 'public', 'main.html'), (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      break;
    case '/stats':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(stats));
      break;
    case '/':
      fs.readFile(path.join(__dirname, 'public', 'main.html'), (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      break;
    default:
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data);
      });
  }

  let urlRequest = url.parse(req.url, true);
  console.log(req.url);
});

server.listen(3000, () => {
  console.log(`server Start`);
});
