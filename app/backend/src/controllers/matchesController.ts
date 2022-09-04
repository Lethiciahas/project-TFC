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


   public matchesInProgress = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals} = req.body;

    const matches = await this.service.matchesInProgress( homeTeam, awayTeam, homeTeamGoals, awayTeamGoals);

    res.status(201).json(matches);
  };

  public matchesFinish = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.service.matchesFinish(Number(id));
    res.status(200).json({message: 'Finished'});

  }

 
}
