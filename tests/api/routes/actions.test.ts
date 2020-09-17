import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import actions from '../../../api/routes/actions';

chai.use(chaiHttp);

/*
- wystawic 1 REST endpoint, który przyjmuje POSTem:
  {userId: ..., gameId: ...., action: ...}
*/

describe('Actions routes', function () {
  describe('"/actions" GET request', function () {
    it('"/" GET request should return json with list of actions', function (done: Mocha.Done) {
      chai
        .request(actions)
        .get('/')
        .end(function (error, response) {
          expect(error).to.be.null;
          expect(response).to.have.status(200);
          expect(response).to.be.json;
          expect(response.body).to.have.key('actions');
          expect(response.body.actions).to.be.an('array');
          expect(response.body).to.have.key('_links');
          expect(response.body._links).to.have.key('self');
          done();
        });
    });
  });
  describe('"/actions" POST request', function () {
    it('"/" POST request should add action to DB and return json with saved action', function (done: Mocha.Done) {
      chai
        .request(actions)
        .post('/')
        .send({ userId: 1, gameId: 1, action: 'skip' })
        .end(function (error, response) {
          expect(error).to.be.null;
          expect(response).to.have.status(201);
          expect(response).to.be.json;
          expect(response.body).to.have.key('action');
          expect(response.body).to.have.key('_links');
          expect(response.body._links).to.have.key('self');
          expect(response.body._links).to.have.key('actions');
          const savedAction = response.body;
          chai
            .request(actions)
            .get('/')
            .end(function (error, response) {
              expect(error).to.be.null;
              expect(response).to.have.status(200);
              expect(response.body.actions).to.be.an('array').that.includes(savedAction);
              done();
            });
        });
    });
  });
});
/*
{
  action: {
    id: 102,
    userId: 12,
    gameId: 22,
    action: "stop",
    _links: {
      self: {
        href: "http://localhost:5001/actions/${id}"
      },
      actions: {
        href: "http://localhost:5001/actions"
      }
    },
  }
}
*/
