import IAction from '../../models/IAction';
import actions from '../mockup';

const getAll = (): IAction[] => {
  return actions;
};

const getById = (id: ActionId): IAction | null => {
  for (const index in actions) {
    if (actions[index].id === id) return actions[index];
  }
  return null;
};

const add = (action: { userId: UserId; gameId: GameId; action: ActionType }): ActionId => {
  const newId = actions.length + 1;
  actions.push({
    id: newId.toString(),
    userId: action.userId,
    gameId: action.gameId,
    action: action.action,
  });
  if (getById(newId.toString()) === null) return '-1';
  return newId.toString();
};

export default { getAll, getById, add };
