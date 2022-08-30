import { Model, INTEGER } from 'sequelize';
import db from '.';
import Teams from './TeamsModels';

class Matches extends Model {
  public id!: number;
  public homeTeam!: number;
  public homeTeamGoals!: number;
  public awayTeam!: number;
  public awayTeamGoals: number;
  public inProgress: number;
}
Matches.init({
  id: {
    type: INTEGER,
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
    type: INTEGER,
    allowNull: false,
  },
}, {
// ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Matches.belongsTo(Teams, {
  foreignKey: 'homeTeam', as: 'teamHome',
});
Matches.belongsTo(Teams, {
  foreignKey: 'awayTeam', as: 'teamAway',
});

Teams.hasMany(Matches, {
  foreignKey: 'homeTeam', as: 'homeTeam',
});
Teams.hasMany(Matches, {
  foreignKey: 'awayTeam', as: 'awayTeam',
});

export default Matches;
