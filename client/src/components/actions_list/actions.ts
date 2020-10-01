import Action from './Action';
import { getData } from '../../connectors';

// simplified copy of interface from backend
interface IActionREST {
  id: string;
  userId: string;
  gameId: string;
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

const getActions = async (): Promise<Action[]> => {
  const result = await getData('http://localhost:5001/actions');
  if (!result.success) return []; // TODO: Proper error handling

  const packagedActions: IActionREST[] = result.actions.actions;

  const actions = packagedActions.map((action) => {
    return { id: action.id, userId: action.userId, gameId: action.gameId, action: action.action };
  });

  return actions;
};

export { getActions };
