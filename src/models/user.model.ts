import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/User.interface';

export default class UserModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async adicUser(user: IUser) {
    const { username, vocation, level, password } = user;
    const query = `INSERT 
    INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [username, vocation, level, password]);
  
    const newUser = { id: insertId, ...user };
  
    return newUser;
  }
}