import { Request, Response } from 'express';
import statusCode from '../errors/AppErrors';
import LoginService from '../services/login.services';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public userLogin = async (req: Request, res: Response) => {
    const token = await this.loginService.userLogin(req.body);
    if (!token) {
      return res.status(statusCode.UNAUTHORIZED)
        .json({ message: 'Username or password invalid' });
    }
    return res.status(statusCode.OK).json({ token });
  };
}