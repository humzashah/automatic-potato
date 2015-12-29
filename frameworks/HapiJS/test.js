var automaticPotatoTest = function () {
  'use strict';

  let app = require('./automatic_potato');
  let address = app.address;
  let boot = app.boot;
  let intro = app.intro;
  let shutdown = app.shutdown;

  let fetchPath = function (suffix) {
    let fullPath = address + suffix;
    return fullPath;
  };

  let jasmine = new (require('jasmine'))();

  describe('Automatic Potato HapiJS', function () {
    beforeAll(boot);
    afterAll(shutdown);

    let request = require('request');

    let home = '/';
    describe(home, function () {
      let path = fetchPath(home);

      it('home works', function (done) {
        request(path, function(error, response, body){
          let responseCode = response.statusCode;
          expect(responseCode).toEqual(200);
          done();
        });
      });

      it('home shows intro', function (done) {
        request(path, function(error, response, body){
          expect(body).toEqual(intro);
          done();
        });
      });
    });

    let autoPotate = '/auto-potate';
    describe(autoPotate, function () {
      let path = fetchPath(autoPotate);

      it('auto-potate works', function (done) {
        request(path, function(error, response, body){
          let responseCode = response.statusCode;
          expect(responseCode).toEqual(200);
          done();
        });
      });

      it('auto-potate shows image', function (done) {
        request(path, function(error, response, body){
          let responseContentType = response.headers['content-type'];
          let imageContentTypes = ['image/gif', 'image/jpeg', 'image/jpg'];
          expect(imageContentTypes).toContain(responseContentType);
          done();
        });
      });
    });
  });

  jasmine.execute();
};

automaticPotatoTest();
