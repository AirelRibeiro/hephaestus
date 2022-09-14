import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validLoginFields = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.username) return res.status(400).json({ message: '"username" is required' });
  if (!req.body.password) return res.status(400).json({ message: '"password" is required' });
  next();
};

const fieldsValidations = Joi.object({
  username: Joi.string().required().min(3).messages({
    'any.required': '"username" is required|400',
    'string.base': '"username" must be a string|422',
    'string.min': '"username" length must be at least 3 characters long|422',
  }),
  classe: Joi.string().required().min(3).messages({
    'any.required': '"classe" is required|400',
    'string.base': '"classe" must be a string|422',
    'string.min': '"classe" length must be at least 3 characters long|422',
  }),
  level: Joi.number().required().min(1).messages({
    'any.required': '"level" is required|400',
    'number.base': '"level" must be a number|422',
    'number.min': '"level" must be greater than or equal to 1|422',
  }),
  password: Joi.string().required().min(8).messages({
    'any.required': '"password" is required|400',
    'string.base': '"password" must be a string|422',
    'string.min': '"password" length must be at least 8 characters long|422',
  }),
});

const validUserFields = (req: Request, res: Response, next: NextFunction) => {

};

export {
  validLoginFields,
  validUserFields,
};
