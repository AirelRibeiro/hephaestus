import jwt, { JwtPayload } from 'jsonwebtoken';
import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

interface ReqWithUser extends Request {
  user: string | boolean | jwt.JwtPayload
}

const validToken = (token: string): string | JwtPayload | boolean => {
  try {
    const decoded = jwt.verify(token, 'JWT_SECRET');
    return decoded;
  } catch (err) {
    return false;
  }
};

const fieldsValidations = Joi.object({
  productsIds: Joi.array().required().items(Joi.number().min(1)).min(1)
    .messages({
      'any.required': '"productsIds" is required|400',
      'array.base': '"productsIds" must be an array|422',
      'array.min': '"productsIds" must include only numbers|422',
      'array.items': '"productsIds" must include only numbers|422',
    }),
});

const validOrderInsertion = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const auth = validToken(authorization);
  if (!auth) return res.status(401).json({ message: 'Invalid token' });
  (req as ReqWithUser).user = auth;

  const validsIds = fieldsValidations.validate(req.body);
  if (validsIds.error) {
    const error: string = validsIds.error.details[0].message;
    return res.status(Number(error.split('|')[1])).json({ message: error.split('|')[0] });
  }

  return next();
};

export default validOrderInsertion;
