import { Router } from 'express';
import validateToken from '../middleware/validateToken';
import MatchesController from '../controllers/matchesController';

const router = Router();

const matchesController = new MatchesController();

router.get('/matches', (req, res) => matchesController.listAll(req, res));

router.post('/matches', (res, req) => matchesController.matchesInProgress(res, req) );

router.patch('/matches/:id/finish', (res, req) => matchesController.matchesFinish (res, req));


export default router;
