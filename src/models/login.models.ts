import { Pool } from 'mysql2/promise';
import ILogin from '../interfaces/Login.interface';
import { IUser } from '../interfaces/User.interface';

export default class LoginModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async userLogin(params: ILogin) {
    const { username } = params;
    const query = 'SELECT id, username, password FROM Trybesmith.users WHERE username = ?';

    const result = await this.connection.execute(query, [username]);
    const [rows] = result;
    const [user] = rows as IUser[];
    return user;
  }
}