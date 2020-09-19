import actionsDB from '../../database/actions';
import IAction from '../../models/IAction';
import IActions from '../../models/IActions';

const getActions = (): IActions => {
  const actionsArray: IAction[] = actionsDB.getAll();
  const actions: IActions = {
    actions: actionsArray,
    _links: {
      self: {
        href: '/actions',
        methods: ['GET', 'POST'],
      },
    },
  };
  return actions;
};

const getAction = (actionId: ActionId): IAction | null => {
  const action: IAction | null = actionsDB.getById(actionId);

  if (action === null) return null;

  return action;
};

const addAction = (action: NewAction): ActionId => {
  return actionsDB.add(action);
};

export { getActions, getAction, addAction };
