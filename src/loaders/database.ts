import { verifyConnection } from '../database/mysql/verifyConnection';
import Action from '../models/Action';

const setupDB = async (): Promise<boolean> => {
  if (!verifyConnection()) return false;

  await Action.sync();

  return true;
};

export default { setupDB };
