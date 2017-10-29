'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.loopback.name;
  });

  app.get('/demo/all', 'demo.index');
  app.get('/demo/insert', 'demo.create');
};
