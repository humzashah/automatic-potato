var superagent = require('superagent');
var expect = require('expect.js');
var app = require('../app');

var address = app.address;
var boot = app.boot;
var intro = app.intro;
var shutdown = app.shutdown;

var fetchPath = function (suffix) {
  var fullPath = address + suffix;
  return fullPath;
}

describe('Automatic Potato', function () {
  before(function () {
    boot();
  });

  var home = '/';
  describe(home, function () {
    var path = fetchPath(home);

    it('home works', function (done) {
      superagent.get(path).end(function (err, res) {
        expect(res.status).to.equal(200);
        done();
      })
    })

    it('home shows intro', function (done) {
      superagent.get(path).end(function (err, res) {
        expect(res.text).to.equal(intro);
        done();
      })
    })
  });

  var autoPotate = '/auto-potate';
  describe(autoPotate, function () {
    var path = fetchPath(autoPotate);

    it('auto-potate works', function (done) {
      superagent.get(path).end(function (err, res) {
        expect(res.status).to.equal(200);
        done();
      })
    })

    it('auto-potate shows image', function (done) {
      superagent.get(path).end(function (err, res) {
        var responseContentType = res.header['content-type'];
        var imageContentTypes = ['image/gif', 'image/jpeg', 'image/jpg']
        expect(imageContentTypes).to.contain(responseContentType);
        done();
      })
    })
  });

  after(function () {
    shutdown();
  });
});
