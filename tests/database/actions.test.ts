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
});
