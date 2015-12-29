// This module exports: address, intro, boot, shutdown

'use strict';

let publicFolder = require('path').resolve('../../public');
let potatoes = require('fs').readdirSync(publicFolder);
let potatoesCount = potatoes.length;

let randomPotatoIndex = function () {
  let randomNumber = Math.random();
  let index = Math.floor(randomNumber * potatoesCount);
  return index;
};

let autoPotate = function () {
  let index = randomPotatoIndex();
  let potatoFile = potatoes[index];
  let potato = publicFolder + '/' + potatoFile;
  return potato;
};

const PORT = 3000;
exports.address = 'http://localhost:' + PORT;

const CLIENT_INTRO = 'This is Automatic Potato via ExpressJS.';
exports.intro = CLIENT_INTRO;

let app = require('express')();
app.get('/', function (req, res) {
  res.send(CLIENT_INTRO);
});

app.get('/auto-potate', function (req, res) {
  let image = autoPotate();
  res.sendFile(image);
});

let server;
let boot = function () {
  server = app.listen(PORT);
};
exports.boot = boot;

let shutdown = function () {
  server.close();
};
exports.shutdown = shutdown;
