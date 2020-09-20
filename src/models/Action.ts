import { DataTypes } from 'sequelize';
import sequelize from '../database/mysql/getConnection';

const Action = sequelize.define(
  'Action',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gameId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'action',
  }
);

export default Action;
