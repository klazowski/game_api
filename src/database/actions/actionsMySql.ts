import Action from '../../models/Action';
import IAction from '../../models/IAction';

let actions: IAction[] = [];

const getAll = (): IAction[] => {
  return actions;
};

const getById = (id: ActionId): IAction | null => {
  return null;
};

const add = async (action: {
  userId: UserId;
  gameId: GameId;
  action: ActionType;
}): Promise<ActionId> => {
  const newAction = await Action.create(action);
  return newAction.id;
};

export default { getAll, getById, add };
