import { verifyConnection } from '../database/mysql/verifyConnection';
import Action from '../models/Action';
import waitPort from 'wait-port';

const setupDB = async (): Promise<boolean> => {
  await waitPort({ host: process.env.MYSQL_HOST, port: 3306 });

  if (!verifyConnection()) return false;

  await Action.sync();

  console.log(`DB setup successful`);

  return true;
};

export default { setupDB };
