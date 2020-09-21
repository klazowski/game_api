import { Sequelize, Options } from 'sequelize';
import config from '../../config';

const sequelize =
  config.mysql.uri === ''
    ? new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
        host: config.mysql.host,
        port: Number.parseInt(config.mysql.port),
        dialect: 'mysql',
        logging: false,
      })
    : new Sequelize(config.mysql.uri, {
        logging: false,
      });

export default sequelize;
