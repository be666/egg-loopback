'use strict';

const assert = require('power-assert');
const request = require('supertest');
const mm = require('egg-mock');

describe('test/loopback.test.js', () => {
  let app;

  before(() => {
    mm.env('unittest');
    app = mm.app({
      baseDir: 'apps/loopback-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, loopback')
      .expect(200);
  });

  it('should Get eggLoopback', async () => {
    const { Test } = app.loopback.models;

    await Test.destroyAll();
    await Test.create({ name: 'test_1' });
    return request(app.callback())
      .get('/demo/all')
      .expect(function(res) {
        assert(res.status === 200);
        assert(res.body.length === 1);
        assert(res.body[0].name === 'test_1');
      });
  });

  it('should ctx eggLoopback', async () => {
    const { Test } = app.loopback.models;
    await Test.destroyAll();
    return request(app.callback())
      .get('/demo/insert?name=test_2')
      .expect(function(res) {
        assert(res.status === 200);
        assert(res.body.length === 1);
        assert(res.body[0].name === 'test_2');
      });
  });

});
