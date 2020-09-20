import { expect } from 'chai';
import { verifyConnection } from '../../../src/database/mysql/verifyConnection';

describe('Test DB connection', function () {
  it('Should connect to DB', async function () {
    const result: boolean = await verifyConnection();
    expect(result).to.be.true;
  });
});
