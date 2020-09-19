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

export { getActions };
