import Action from '../../models/Action';
import IAction from '../../models/IAction';
import IDatabaseActions from '../interfaces/IDatabaseActions';

const getAll = async (): Promise<IAction[]> => {
  return await Action.findAll();
};

const getById = async (id: ActionId): Promise<IAction | null> => {
  return await Action.findOne({
    where: {
      id: id,
    },
  });
};

const add = async (action: {
  userId: UserId;
  gameId: GameId;
  action: ActionType;
}): Promise<ActionId> => {
  const newAction = await Action.create(action);
  return newAction.id;
};

const actions: IDatabaseActions = { getAll: getAll, getById: getById, add: add };

export default actions;
