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
    id: newId,
    userId: action.userId,
    gameId: action.gameId,
    action: action.action,
    _links: {
      self: {
        href: `/actions/${newId}`,
      },
      actions: {
        href: '/actions',
      },
    },
  });
  if (getById(newId) === null) return -1;
  return newId;
};

export default { getAll, getById, add };
