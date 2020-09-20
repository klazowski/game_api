import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/mysql/getConnection';
import IAction from './IAction';

class Action extends Model implements IAction {
  public id!: ActionId;
  public userId!: UserId;
  public gameId!: GameId;
  public action!: ActionType;
}

Action.init(
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
    sequelize,
  }
);

export default Action;
