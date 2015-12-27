var publicFolder = require('path').resolve('../../public');
var potatoes = require('fs').readdirSync(publicFolder);
var potatoesCount = potatoes.length;

var randomPotatoIndex = function () {
  var randomNumber = Math.random();
  var index = Math.floor(randomNumber * potatoesCount);
  return index;
}

var autoPotate = function () {
  var index = randomPotatoIndex();
  var potatoFile = potatoes[index];
  var potato = publicFolder + '/' + potatoFile;
  return potato;
}

var app = require('express')();

var intro = 'This is Automatic Potato via ExpressJS.';
app.get('/', function (req, res) {
  res.send(intro);
});

app.get('/auto-potate', function (req, res) {
  var image = autoPotate();
  res.sendFile(image);
});

var server;
var port = 3000;
var address = 'http://localhost:' + port;
var boot = function () {
  server = app.listen(port);
}

var shutdown = function () {
  server.close();
};

if (require.main === module) {
  // Tests are not running
  var intro = 'ExpressJS app listening at ' + address;
  console.log(intro)
  boot();
} else {
  // Tests are running
  console.info('Running app as a module')
  var exports = module.exports = {};
  exports.address = address;
  exports.boot = boot;
  exports.intro = intro;
  exports.shutdown = shutdown;
}
