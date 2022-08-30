import { Request, Response } from 'express';
import TeamService from '../services/teamService';

export default class TeamsController {
  private service: TeamService;

  constructor() {
    this.service = new TeamService();
  }

  public listAll = async (_req: Request, res: Response) => {
    const teams = await this.service.list();
    res.status(200).json(teams);
  };
}
