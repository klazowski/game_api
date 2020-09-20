import IAction from '../../models/IAction';

/*
  Mockup data to test functionalities before moving to DB implementation.
*/
const actions: IAction[] = [
  {
    id: '1',
    userId: '1',
    gameId: '2',
    action: 'SAVE',
  },
  {
    id: '2',
    userId: '2',
    gameId: '1',
    action: 'CANCEL',
  },
  {
    id: '3',
    userId: '3',
    gameId: '7',
    action: 'SAVE',
  },
  {
    id: '4',
    userId: '3',
    gameId: '7',
    action: 'CANCEL',
  },
];

export default actions;
