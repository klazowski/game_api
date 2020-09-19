import IAction from '../../models/IAction';

/*
  Mockup data to test functionalities before moving to DB implementation.
*/
const actions: IAction[] = [
  {
    id: 1,
    userId: 1,
    gameId: 2,
    action: 'SAVE',
    _links: {
      self: {
        href: '/actions/1',
      },
      actions: {
        href: '/actions',
      },
    },
  },
  {
    id: 2,
    userId: 2,
    gameId: 1,
    action: 'CANCEL',
    _links: {
      self: {
        href: '/actions/2',
      },
      actions: {
        href: '/actions',
      },
    },
  },
  {
    id: 3,
    userId: 3,
    gameId: 7,
    action: 'SAVE',
    _links: {
      self: {
        href: '/actions/3',
      },
      actions: {
        href: '/actions',
      },
    },
  },
  {
    id: 4,
    userId: 3,
    gameId: 7,
    action: 'CANCEL',
    _links: {
      self: {
        href: '/actions/4',
      },
      actions: {
        href: '/actions',
      },
    },
  },
];

export default actions;
