import { Request, Response } from 'express';

import LoginService from '../services/loginService';

export default class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const auth = await this.service.login(req.body);
    res.status(200).json({ auth });
  };

  public loginValidate = async (_req: Request, res: Response) => {
    const auth = await this.service.loginValidate();
    res.status(200).json({ role: auth });
  };
}
