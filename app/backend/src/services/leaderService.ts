import Teams from '../database/models/TeamsModels';
import Matches from '../database/models/MatchesModel';
import { calculateHome } from '../Utils';

export default class LeaderService {
  public leaderTeamsHome = async () => {
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
    ],
    where: { inProgress: 0 } }) as any;

    const teams = await Teams.findAll();
    const results = calculateHome(teams, matchesList);
    return results;
  };
}
