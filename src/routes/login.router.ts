import { Router } from 'express';
import LoginController from '../controller/login.controler';
import verifLogin from '../middlewares/login.middleware';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/', verifLogin, loginController.userLogin);

export default loginRouter;