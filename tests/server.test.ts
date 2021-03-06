import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../src/server';

chai.use(chaiHttp);

// I prefer lambdas but Mocha documentation discourages lambdas usage as they mess up 'this'.
describe('API routes', function () {
  describe('"/" GET request', function () {
    it('"/" GET request should return json with list of available endpoints', function (done: Mocha.Done) {
      chai
        .request(server)
        .get('/')
        .end(function (error, response) {
          expect(error).to.be.null;
          expect(response).to.have.status(200);
          expect(response).to.be.json;
          expect(response.body).to.include.keys('_links');
          expect(response.body._links).to.include.keys(['self', 'actions']);
          done();
        });
    });
  });
});
