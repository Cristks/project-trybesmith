import connection from '../models/connection';
import LoginModel from '../models/login.models';
import ILogin from '../interfaces/Login.interface';
// import IToken from '../interfaces/JWT.Interface';
import createToken from '../utils/jwt';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async userLogin(params: ILogin) {
    const user = await this.model.userLogin(params);
    if (!user || user.password !== params.password) return;
    const token = createToken(user);
    return { token };    
  }
}

export default LoginService;