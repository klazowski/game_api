export default interface IAction {
  id: ActionId;
  userId: UserId;
  gameId: GameId;
  action: ActionType;
  _links: {
    self: {
      href: string;
    };
    actions: {
      href: string;
    };
  };
}
