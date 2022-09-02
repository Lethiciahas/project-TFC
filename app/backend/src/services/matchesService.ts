import 'dotenv/config';
import Teams from '../database/models/TeamsModels';
import Matches from '../database/models/MatchesModel';

export default class MatchesService {
  public list = async () => {
    const matchesList = await Matches.findAll({ include: [
      {
        model: Teams,
        as: 'teamHome',
        attributes: ['teamName'],
      },
      {
        model: Teams,
        as: 'teamAway',
        attributes: ['teamName'],
      },
    ] });
    return matchesList;
  };

 /*  public create = async (
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) => {
    const addMatches = await Matches.create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals});
    return addMatches;
  
  } */
  public update = async (id: string) => {
    const upProgress = await Matches.update({ inProgress: false }, { where: {id } });
    return upProgress;
  }
}
