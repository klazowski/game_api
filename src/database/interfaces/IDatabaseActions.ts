import IAction from '../../models/IAction';

export default interface IDatabaseActions {
  getAll: () => Promise<IAction[]>;
  getById: (id: ActionId) => Promise<IAction | null>;
  add: (action: { userId: UserId; gameId: GameId; action: ActionType }) => Promise<ActionId>;
}
