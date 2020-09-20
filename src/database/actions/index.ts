import config from '../../config';
import actionsMock from './actionsMock';
import actionsMySql from './actionsMySql';

export default config.mockDb === 'false' ? actionsMySql : actionsMock;
