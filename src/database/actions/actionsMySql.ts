import IAction from '../../models/IAction';

let actions: IAction[] = [];

const getAll = (): IAction[] => {
  return actions;
};

const getById = (id: ActionId): IAction | null => {
  return null;
};

const add = (action: { userId: UserId; gameId: GameId; action: ActionType }): ActionId => {
  return -1;
};

export default { getAll, getById, add };
