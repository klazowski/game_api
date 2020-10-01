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
  {
    id: '5',
    userId: '12',
    gameId: '22',
    action: 'SAVE',
  },
  {
    id: '6',
    userId: '23',
    gameId: '13',
    action: 'CANCEL',
  },
  {
    id: '7',
    userId: '34',
    gameId: '74',
    action: 'SAVE',
  },
  {
    id: '8',
    userId: '35',
    gameId: '75',
    action: 'CANCEL',
  },
  {
    id: '9',
    userId: '12',
    gameId: '22',
    action: 'SAVE',
  },
  {
    id: '10',
    userId: '23',
    gameId: '13',
    action: 'CANCEL',
  },
  {
    id: '11',
    userId: '34',
    gameId: '74',
    action: 'SAVE',
  },
  {
    id: '12',
    userId: '35',
    gameId: '75',
    action: 'CANCEL',
  },
];

export default actions;
