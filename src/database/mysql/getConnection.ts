import { Sequelize, Options } from 'sequelize';
import config from '../../config';

const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
  host: config.mysql.address,
  port: Number.parseInt(config.mysql.port),
  dialect: 'mysql',
});

export default sequelize;
