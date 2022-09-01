import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import Users from '../database/models/UsersModels';
import { ILogin } from '../interfaces/IUsers';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
} as jwt.SignOptions

export default class LoginService {
  public login = async ({email, password }: ILogin) => {
    if (!email || !password) {
      const error = new Error('All fields must be filled');
      error.name = 'BadRequest';
      throw error;
    }
    const user = await Users.findOne();
    if (!user || !bcrypt.compareSync(password, user.password)) {
      const error = new Error('Incorrect email or password');
      error.name = 'Unauthorized';
      throw error;
    }
    const token = jwt.sign({ email }, secret, jwtConfig);
    return token;
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
