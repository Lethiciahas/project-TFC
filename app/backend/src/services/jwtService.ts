import * as jwt from 'jsonwebtoken';
import { ILogin } from '../interfaces/IUsers';

export default class JwtService {
  static createToken(payload: ILogin) {
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret');
    return token;
  }
}
