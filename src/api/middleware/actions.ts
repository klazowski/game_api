import actionsDB from '../../database/actions';
import IAction from '../../models/IAction';
import IActionREST from '../../models/IActionREST';
import IActionsREST from '../../models/IActionsREST';

const makeRestAction = (action: IAction): IActionREST => {
  return {
    ...action,
    _links: {
      self: {
        href: `/actions/${action.id}`,
      },
      actions: {
        href: `/actions`,
      },
    },
  };
};

const getActions = async (): Promise<IActionsREST> => {
  const actionsArray: IAction[] = await actionsDB.getAll();

  const actionsREST: IActionREST[] = actionsArray.map(
    (action: IAction): IActionREST => {
      return makeRestAction(action);
    }
  );

  const actions: IActionsREST = {
    actions: actionsREST,
    _links: {
      self: {
        href: '/actions',
        methods: ['GET', 'POST'],
      },
    },
  };
  return actions;
};

const getAction = async (actionId: ActionId): Promise<IActionREST | null> => {
  const action: IAction | null = await actionsDB.getById(actionId);
  if (action === null) return null;

  return makeRestAction(action);
};

const addAction = async (action: NewAction): Promise<ActionId> => {
  return await actionsDB.add(action);
};

export { getActions, getAction, addAction };
