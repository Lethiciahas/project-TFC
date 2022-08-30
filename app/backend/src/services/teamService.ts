import Teams from '../database/models/TeamsModels';

export default class TeamService {
  public list = async () => {
    const teamsList = await Teams.findAll();
    return teamsList;
  };
}
