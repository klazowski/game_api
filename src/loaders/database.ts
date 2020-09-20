import { verifyConnection } from '../database/mysql/verifyConnection';
import Action from '../models/Action';

const setupDB = async (): Promise<boolean> => {
  if (!verifyConnection()) return false;

  await Action.sync();

  console.log(`DB setup successful`);

  return true;
};

export default { setupDB };
