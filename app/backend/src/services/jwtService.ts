import * as dotenv from 'dotenv';
import jwt = require('jsonwebtoken');

dotenv.config();

const secret = process.env.JWT_SECRET as string;

export default class JwtService {
  static createToken = (email: string, password: string): string => {
    const token = jwt.sign({ email, password }, secret);
    return token;
  };
  /* static validateToken = (token:string): string => {
    const authToken = jwt.verify(token, secret) as JwtPayload;
  } */
}
