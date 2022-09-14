import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const fieldsValidations = Joi.object({
  name: Joi.string().required().min(3).messages({
    'any.required': '"name" is required|400',
    'string.base': '"name" must be a string|422',
    'string.min': '"name" length must be at least 3 characters long|422',
  }),
  amount: Joi.string().required().min(3).messages({
    'any.required': '"amount" is required|400',
    'string.base': '"amount" must be a string|422',
    'string.min': '"amount" length must be at least 3 characters long|422',
  }),
});

