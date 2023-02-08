import { Router } from 'express';
import UserController from '../controller/user.controller';
import userMiddleware from '../middlewares/user.middleware';

const userRouter = Router();
const userController = new UserController();

userRouter.post(
  '/', 
  userMiddleware.verifUserName,
  userMiddleware.verifUserVocation,
  userMiddleware.verifUserPassword,
  userMiddleware.verifUserLevel,

  userController.adicUser,

);

export default userRouter;