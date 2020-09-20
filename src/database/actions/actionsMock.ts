import IAction from '../../models/IAction';
import IDatabaseActions from '../interfaces/IDatabaseActions';
import actionsDB from '../mockup';

const promiseWrapper = (o: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    resolve(o);
  });
};

const getAll = async (): Promise<IAction[]> => {
  return promiseWrapper(actionsDB);
};

const getById = async (id: ActionId): Promise<IAction | null> => {
  for (const index in actionsDB) {
    if (actionsDB[index].id === id) return promiseWrapper(actionsDB[index]);
  }
  return promiseWrapper(null);
};

const add = async (action: {
  userId: UserId;
  gameId: GameId;
  action: ActionType;
}): Promise<ActionId> => {
  const newId = actionsDB.length + 1;
  actionsDB.push({
    id: newId.toString(),
    userId: action.userId,
    gameId: action.gameId,
    action: action.action,
  });
  const newAction = await getById(newId.toString());
  if (newAction === null) return promiseWrapper('-1');
  return promiseWrapper(newId.toString());
};

const actions: IDatabaseActions = {
  getAll: getAll,
  getById: getById,
  add: add,
};
export default actions;
