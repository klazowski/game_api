export default interface IAction {
  id: ActionId;
  userId: UserId;
  gameId: GameId;
  action: ActionType;
}
