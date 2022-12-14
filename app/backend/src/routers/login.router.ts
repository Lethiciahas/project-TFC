import { Router } from 'express';
import validateToken from '../middleware/validateToken';
import LoginController from '../controllers/loginController';
// import validateLogin from '../middleware/validateLogin';

const router = Router();

const loginController = new LoginController();

router.post('/login', (req, res) => loginController.login(req, res));

router.get('/login/validate', (req, res) => loginController.loginValidate(req, res), validateToken)

export default router;
