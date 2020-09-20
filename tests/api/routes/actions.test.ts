import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import IActionsREST from '../../../src/models/IActionsREST';

import server from '../../../src/server';

chai.use(chaiHttp);

/*
- wystawic 1 REST endpoint, który przyjmuje POSTem:
  {userId: ..., gameId: ...., action: ...}
*/

describe('Actions routes', function () {
  describe('"/actions" GET request', function () {
    it('"/" GET request should return json with list of actions', function (done: Mocha.Done) {
      chai
        .request(server)
        .get('/actions')
        .end(function (error, response) {
          expect(error).to.be.null;
          expect(response).to.have.status(200);
          expect(response).to.be.json;
          expect(response.body).to.include.keys('actions', '_links');
          expect(response.body.actions).to.be.an('array');
          expect(response.body._links).to.include.keys('self');
          done();
        });
    });
  });
  describe('"/actions" POST request', function () {
    it('"/" POST request should add action to DB and return json with saved action', function (done: Mocha.Done) {
      const newAction = { userId: 1, gameId: 1, action: 'CANCEL' };
      chai
        .request(server)
        .post('/actions')
        .send(newAction)
        .end(function (error, response) {
          expect(error).to.be.null;
          expect(response).to.have.status(201);
          expect(response).to.be.json;
          expect(response.body).to.include.keys('success', 'action');
          expect(response.body.success).to.be.true;
          const savedAction = response.body.action;
          expect(savedAction).to.include.keys('id', 'userId', 'gameId', 'action', '_links');
          expect(savedAction._links).to.include.keys('self', 'actions');

          chai
            .request(server)
            .get('/actions')
            .end(function (error, response) {
              expect(error).to.be.null;
              expect(response).to.have.status(200);
              const allActions: IActionsREST = response.body.actions;
              expect(allActions).to.be.an('array').that.deep.includes(savedAction);
              done();
            });
        });
    });
  });
});
