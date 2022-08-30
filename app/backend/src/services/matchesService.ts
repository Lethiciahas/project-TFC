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
}
