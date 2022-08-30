import { Router } from 'express';
import TeamsController from '../controllers/teamsController';

const router = Router();

const teamsController = new TeamsController();

router.get('/', (req, res) => teamsController.listAll(req, res));

export default router;
