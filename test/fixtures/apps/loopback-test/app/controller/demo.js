'use strict';
module.exports = app => {

  class DemoController extends app.Controller {
    * index() {

      const { Test } = this.app.loopback.models;

      this.ctx.body = yield Test.find();
    }

    * create() {

      const { name } = this.ctx.query;
      const { Test } = this.app.loopback.models;

      yield Test.create({ name });
      this.ctx.body = yield Test.find();
    }

  }

  return DemoController;

};

