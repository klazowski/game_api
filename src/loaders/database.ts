import { verifyConnection } from '../database/mysql/verifyConnection';
import Action from '../models/Action';
import waitPort from 'wait-port';
import mockupActions from '../database/mockup';

const setupDB = async (): Promise<boolean> => {
  await waitPort({ host: process.env.MYSQL_HOST, port: 3306 });

  if (!verifyConnection()) return false;

  await Action.sync();

  if ((await Action.count()) === 0) {
    console.log('No data found in action table. Populating with mockup data.');
    Action.bulkCreate(mockupActions);
    console.log('Database is now ready to use');
  }

  console.log(`DB setup successful`);

  return true;
};

export default { setupDB };
