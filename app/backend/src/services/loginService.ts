import * as dotenv from 'dotenv';
import * as bcryptjs from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import Users from '../database/models/UsersModels';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
} as jwt.SignOptions

export default class LoginService {
  public login = async (email: string, password: string) => {
    const data = await Users.findOne({ where: { email } });

    if (!data) {
      const error = new Error('Incorrect email or password');
      error.name = 'Unauthorized';
      throw error;
    }
    const bcrypt = bcryptjs.compare(password, data.password);

    if (!bcrypt) {
      const error = new Error('Incorrect email or password');
      error.name = 'Unauthorized';
      throw error;
    }
    const token = jwt.sign({ email, password }, secret, jwtConfig);
    return token
  };

  public loginValidate = async () => {
       const data = await Users.findOne();
      if (!data) {
        const error = new Error('Token must be a valid token');
        error.name = 'Unauthorized';
        throw error;
      }
      return data.role
  }
}
