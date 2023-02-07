import { Request, Response } from 'express';
import LoginService from '../services/login.services';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public userLogin = async (req: Request, res: Response) => {
    const token = await this.loginService.userLogin(req.body);
    if (!token) {
      return res.status(401)
        .json({ message: 'Username or password invalid' });
    }
    return res.status(200).json({ token });
  };
}