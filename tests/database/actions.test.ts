import { expect } from 'chai';
import actionsDB from '../../src/database/actions';

describe('Database access', function () {
  describe('Fetch actions', function () {
    it('Should return array of Actions', function (done: Mocha.Done) {
      expect(actionsDB.getAll()).to.be.an('array');
      done();
    });
    it('Should return single Action', function (done: Mocha.Done) {
      expect(actionsDB.getById(-1)).to.be.null;
      expect(actionsDB.getById(1)).to.not.be.null;
      done();
    });
  });
  describe('Add action', function () {
    it('Should add action to database and return id', function (done: Mocha.Done) {
      const newAction: NewAction = {
        userId: 3,
        gameId: 7,
        action: 'CANCEL',
      };
      const newId = actionsDB.add(newAction);
      expect(newId).to.be.greaterThan(0);
      expect(actionsDB.getById(newId)).to.not.be.null;
      // ToDo: add some sort of check if action was saved correctly.
      done();
    });
  });
});
