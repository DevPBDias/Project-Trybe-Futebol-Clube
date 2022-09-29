import { Model, INTEGER, DATE, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './TeamsModel';

class Match extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamGoals!: number;
  inProgress: boolean;
}

Match.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'matches',
  underscored: true,
  timestamps: false
});

Match.belongsTo(Team, { foreignKey: 'home_team', as: 'homeTeam' });
Team.hasMany(Match, { foreignKey: 'home_team', as: 'homeTeamMatch' });

Match.belongsTo(Team, { foreignKey: 'away_team', as: 'awayTeam' });
Team.hasMany(Match, { foreignKey: 'away_team', as: 'awayTeamMatch' });

export default Match;
