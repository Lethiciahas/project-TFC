import Teams from '../database/models/TeamsModels';

export default class TeamService {
  public list = async () => {
    const teamsList = await Teams.findAll();
    return teamsList;
  };

  public findById = async (id: number) => {
    const getId = await Teams.findOne({ where:{ id } });
    return getId;
  }
}
