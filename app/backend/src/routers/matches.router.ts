import { Router } from 'express';
// import validateToken from '../middleware/validateToken';
import MatchesController from '../controllers/matchesController';

const router = Router();

const matchesController = new MatchesController();

router.get('/matches', (req, res) => matchesController.listAll(req, res));

// router.post('/matches', validateToken, (res, req) => matchesController.create(req, res) );
router.patch('/matches/:id/finish', (req, res) => matchesController.update(req, res));

export default router;
