import IAction from '../models/IAction';
import actions from './mockup';

const getAll = (): IAction[] => {
  return actions;
};

const getById = (id: ActionId): IAction | null => {
  for (const index in actions) {
    if (actions[index].id === id) return actions[index];
  }
  return null;
};

export default { getAll, getById };
