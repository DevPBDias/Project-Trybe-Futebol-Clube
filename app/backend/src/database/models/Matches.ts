import { Model, STRING, INTEGER, DATE } from 'sequelize';
import db from '.';
import Teams from './Teams';

class Matches extends Model {
  id!: number;
  home_team!: number;
  home_team_goals!: number;
  away_team!: number;
  away_team_goals!: number;
  in_progress: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  userId: {
    type: INTEGER,
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
  modelName: 'matches',
  underscored: true,
});

Matches.belongsTo(Teams, { foreignKey: 'home_team', as: 'team' });

export default Matches;
