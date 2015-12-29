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

const CLIENT_INTRO = 'This is Automatic Potato via HapiJS.';
exports.intro = CLIENT_INTRO;

const server = new (require('hapi')).Server();

// HapiJS v9+ serves files through the Inert plugin
server.register(require('inert'), function () {
});

server.connection({ host: 'localhost', port: PORT });

server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    return reply(CLIENT_INTRO);
  }
});

server.route({
  method: 'GET',
  path:'/auto-potate',
  handler: function (request, reply) {
    let potato = autoPotate();
    return reply.file(potato);
  }
});

let boot = function () {
  server.start(function (err) {
  });
};
exports.boot = boot;

let shutdown = function () {
  server.stop(function (err) {
  });
};
exports.shutdown = shutdown;
