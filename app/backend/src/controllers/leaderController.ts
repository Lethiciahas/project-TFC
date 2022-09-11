import { Request, Response } from 'express';
import LeaderService from '../services/leaderService';

export default class LeaderController {
  private service: LeaderService;

  constructor() {
    this.service = new LeaderService();
  }

  public leaderTeamsHome = async (req: Request, res: Response) => {
    const data = await this.service.leaderTeamsHome();
    res.status(200).json(data);
  }
};
