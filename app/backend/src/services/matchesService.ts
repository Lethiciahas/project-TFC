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

  public matchesInProgress = async (
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) => {
  
    const checkHomeTeam = await Teams.findByPk(homeTeam);
    const checkAwayTeam = await Teams.findByPk(awayTeam);

    // req 25
    if ( homeTeam === awayTeam) {
      const error = new Error('It is not possible to create a match with two equal teams');
      error.name = 'Unauthorized'
      throw error;
    }
    // req 26
    if(checkHomeTeam === null || checkAwayTeam === null) {
      const error = new Error('There is no team with such id!');
      error.name = 'NotFoundError'
      throw error;
    }

    const addMatches = await Matches.create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true});
        
    return addMatches;
  
  }

  public matchesFinish = async(id: number) => {
    const matchFinish = await Matches.update({ inProgress: false}, { where: {id}});

    return matchFinish;
  }
  
}
