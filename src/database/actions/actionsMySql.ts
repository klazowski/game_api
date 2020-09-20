import Action from '../../models/Action';
import IAction from '../../models/IAction';
import IDatabaseActions from '../interfaces/IDatabaseActions';

const getAll = async (): Promise<IAction[]> => {
  const actions = await Action.findAll();
  return actions.map((action) => action.toJSON() as IAction);
};

const getById = async (id: ActionId): Promise<IAction | null> => {
  const action = await Action.findOne({
    where: {
      id: id,
    },
  });
  return action?.toJSON() as IAction;
};

const add = async (action: {
  userId: UserId;
  gameId: GameId;
  action: ActionType;
}): Promise<ActionId> => {
  const newAction = (await Action.create(action)).toJSON() as IAction;
  return newAction.id;
};

const actions: IDatabaseActions = { getAll: getAll, getById: getById, add: add };

export default actions;
