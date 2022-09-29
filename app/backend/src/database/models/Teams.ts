import { Model, STRING, INTEGER, DATE } from 'sequelize';
import db from '.';

class Teams extends Model {
  id!: number;
  team_name!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

Teams.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  team_name: {
    type: STRING,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'teams',
  underscored: true,
});

export default Teams;
