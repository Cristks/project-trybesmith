import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/User.interface';

const createToken = (user: IUser) => {
  const { id, username, vocation, level } = user;
  const newUser = { id, username, vocation, level };
  const token = jwt.sign({ data: newUser }, 'umsegredomuitobemguardado' as string, {
    expiresIn: '30min',
    algorithm: 'HS256',
  });

  return token;
};

export default createToken;