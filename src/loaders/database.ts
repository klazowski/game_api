import { verifyConnection } from '../database/mysql/verifyConnection';
import Action from '../models/Action';

const setupDB = async (): Promise<boolean> => {
  if (!verifyConnection()) return false;

  await Action.sync({ alter: true });

  return true;
};

export default { setupDB };
