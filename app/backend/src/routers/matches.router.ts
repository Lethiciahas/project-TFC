import { Router } from 'express';
import MatchesController from '../controllers/matchesController';

const router = Router();

const matchesController = new MatchesController();

router.get('/matches', (req, res) => matchesController.listAll(req, res));

router.post('/matches', (res, req) => matchesController.matchesInProgress(res, req) );


export default router;
