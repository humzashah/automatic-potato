var automaticPotatoApp = function () {
  'use strict';

  let automaticPotato = require('./automatic_potato');
  let address = automaticPotato.address;
  let serverName = 'Automatic Potato HapiJS';
  let intro = serverName + ' server listening on ' + address + ' ...';

  console.log(intro);

  automaticPotato.boot();
};

automaticPotatoApp();
