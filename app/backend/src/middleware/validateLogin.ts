import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
    const schema = Joi.object({
        email: Joi.string().required().messages({
            'string.empty': 'All fields must be filled',
        }),
        password: Joi.string().required().min(6).messages({
            'string.empty': 'All fields must be filled',
        }),
    });
    const { error } = schema.validate(req.body);

    if(error) {
        throw error;
    }
    next();
}
export default validateLogin;