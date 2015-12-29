var automaticPotatoTest = function () {
  'use strict';

  console.log('Testing Automatic Potato ExpressJS with Mocha ...');

  let app = require('./automatic_potato');
  let address = app.address;
  let boot = app.boot;
  let intro = app.intro;
  let shutdown = app.shutdown;

  let fetchPath = function (suffix) {
    let fullPath = address + suffix;
    return fullPath;
  };

  let expect = require('expect.js');

  describe('Automatic Potato ExpressJS', function () {
    let superagent = require('superagent');

    before(boot);
    after(shutdown);

    let home = '/';
    describe(home, function () {
      let path = fetchPath(home);

      it('home works', function (done) {
        superagent.get(path).end(function (err, res) {
          expect(res.status).to.equal(200);
          done();
        });
      });

      it('home shows intro', function (done) {
        superagent.get(path).end(function (err, res) {
          expect(res.text).to.equal(intro);
          done();
        });
      });
    });

    let autoPotate = '/auto-potate';
    describe(autoPotate, function () {
      let path = fetchPath(autoPotate);

      it('auto-potate works', function (done) {
        superagent.get(path).end(function (err, res) {
          expect(res.status).to.equal(200);
          done();
        });
      });

      it('auto-potate shows image', function (done) {
        superagent.get(path).end(function (err, res) {
          let responseContentType = res.header['content-type'];
          let imageContentTypes = ['image/gif', 'image/jpeg', 'image/jpg'];
          expect(imageContentTypes).to.contain(responseContentType);
          done();
        });
      });
    });
  });
};

automaticPotatoTest();
