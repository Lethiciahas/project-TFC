import { Router } from 'express';
import LoginController from '../controllers/loginController';

const router = Router();

const loginController = new LoginController();

router.post('/', (req, res) => loginController.login(req, res));

/* router.get('/', (req, res) => loginController.loginValidate(req, res)) */

export default router;
