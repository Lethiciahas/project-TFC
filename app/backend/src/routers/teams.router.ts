import { Router } from 'express';
import TeamsController from '../controllers/teamsController';

const router = Router();

const teamsController = new TeamsController();

router.get('/teams', (req, res) => teamsController.listAll(req, res));

router.get('/teams/:id', (req, res) => teamsController.getById(req, res));

export default router;
