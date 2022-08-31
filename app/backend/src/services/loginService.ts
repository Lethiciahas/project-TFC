import * as dotenv from 'dotenv';
import * as bcryptjs from 'bcryptjs';
import { ILogin } from '../interfaces/IUsers';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import Users from '../database/models/UsersModels';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

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
    const token = sign({ email, password }, secret);
    return token
  };

  public loginValidate = async () => {
       const data = await Users.findOne();
      if (!data) {
        const error = new Error('Not Found');
        error.name = 'Unauthorized';
        throw error;
      }
      return data.role
  }
}
