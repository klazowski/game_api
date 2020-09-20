import IAction from '../../models/IAction';

export default interface IDatabaseActions {
  getAll: () => IAction[];
  getById: (id: ActionId) => IAction | null;
  add: (action: { userId: UserId; gameId: GameId; action: ActionType }) => ActionId;
}
