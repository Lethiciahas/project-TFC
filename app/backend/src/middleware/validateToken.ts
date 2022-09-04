import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';

const secret = process.env.JWT_SECRET as string;

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
    jwt.verify(token, secret);
    } catch (err) {
        return res.status(401).json({ message: 'Token must be a valid token' });
   }
   next();
};

export default validateToken;