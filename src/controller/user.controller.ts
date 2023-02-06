import { Request, Response } from 'express';
import UserService from '../services/user.services';

class UserController {
  constructor(private userService = new UserService()) { }

  public adicUser = async (req: Request, res: Response) => {
    const { username, vocation, level, password } = req.body;
    const result = await this.userService.adicUser({ username, vocation, level, password });
    return res.status(201).json(result); 
  };
}

export default UserController;