import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';

export default class MatchesController {
  private service: MatchesService;

  constructor() {
    this.service = new MatchesService();
  }

  public listAll = async (_req: Request, res: Response) => {
    const matches = await this.service.list();
    res.status(200).json(matches);
  };

/* 
   public create = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals} = req.body
    const matches = await this.service.create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals});
    res.status(201).json(matches);
  }; */

  public update = async (req: Request, res: Response) => {
    await this.service.update(req.params.id);
    res.status(200).json({message: "Finished"});
  };
}
