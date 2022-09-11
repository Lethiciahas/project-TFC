import { Router } from 'express';
import LeaderController from '../controllers/leaderController';

const router = Router();

const leaderController = new LeaderController();

router.get('/leaderboard/home', (req, res) => leaderController.leaderTeamsHome(req, res));


export default router; 
