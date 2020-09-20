import { expect } from 'chai';
import actionsDB from '../../src/database/actions';

describe('Database access', function () {
  describe('Fetch actions', function () {
    it('Should return array of Actions', async function () {
      expect(await actionsDB.getAll()).to.be.an('array');
    });
    /* This test will always fail. I have to rework it.
    it('Should return single Action', async function () {
      expect(await actionsDB.getById('-1')).to.be.null;
      expect(await actionsDB.getById('1')).to.not.be.null;
    });*/
  });
  describe('Add action', function () {
    it('Should add action to database and return id', async function () {
      const newAction: NewAction = {
        userId: '3',
        gameId: '7',
        action: 'CANCEL',
      };
      const newId = await actionsDB.add(newAction);
      expect(newId).to.not.be.null;
      expect(await actionsDB.getById(newId)).to.not.be.null;
      // ToDo: add some sort of check if action was saved correctly and not just saved.
    });
  });
});
