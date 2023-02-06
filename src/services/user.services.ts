import connection from '../models/connection';
import UserModel from '../models/user.model';
import { IUser } from '../interfaces/User.interface';
import IToken from '../interfaces/JWT.Interface';
import createToken from '../utils/jwt';

class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  adicUser = async ({ username, vocation, level, password }: IUser): Promise<IToken> => {
    const userToken = await this.model.adicUser({ username, vocation, level, password });
    const token = createToken(userToken);
    return { token };
  };
}

export default UserService;