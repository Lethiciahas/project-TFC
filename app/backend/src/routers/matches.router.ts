import { Router } from 'express';
import MatchesController from '../controllers/matchesController';

const router = Router();

const matchesController = new MatchesController();
router.get('/matches', (req, res) => matchesController.listAll(req, res));

export default router;