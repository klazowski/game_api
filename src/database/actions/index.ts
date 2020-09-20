import config from '../../config';
import IDatabaseActions from '../interfaces/IDatabaseActions';
import actionsMock from './actionsMock';
import actionsMySql from './actionsMySql';

let actions: IDatabaseActions;

if (config.mockDb === 'true') {
  actions = actionsMock;
} else {
  actions = actionsMySql;
}

export default actions;
