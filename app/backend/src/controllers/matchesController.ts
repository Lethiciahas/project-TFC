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
}