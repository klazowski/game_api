import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../server';

chai.use(chaiHttp);

// I prefer lambdas but Mocha documentation discourages lambdas usage as they mess up 'this'.
describe('API routes', function () {
  describe('"/" GET request', function () {
    it('"/" GET request should return json with list of available endpoints', function (done: Mocha.Done) {
      chai
        .request(server)
        .get('/')
        .end((error, response) => {
          expect(error).to.be.null;
          expect(response).to.have.status(200);
          expect(response).to.be.json;
          expect(response.body).to.have.key('_links');
          expect(response.body._links).to.have.key('self');
          expect(response.body._links).to.have.key('actions');
        });
    });
  });
});
