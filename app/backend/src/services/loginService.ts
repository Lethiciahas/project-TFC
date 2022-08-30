import * as bcryptjs from 'bcryptjs';
import Users from '../database/models/UsersModels';
import JwtService from './jwtService';

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
    const auth = JwtService.createToken(email, password);
    return auth;
  };

  /* public loginValidate = async(authorization: string) => {
     const email = JwtService.validateToken(authorization);
     const data = await Users.findOne({ where: { email } });
    if(!data) {
      const error = new Error('Unauthorized');
      error.name = 'Unauthorized';
      throw error;
    }
    return data.role;
  } */
}
