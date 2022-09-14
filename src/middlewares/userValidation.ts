import { NextFunction, Request, Response } from 'express';

const validLoginFields = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.username) return res.status(400).json({ message: '"username" is required' });
  if (!req.body.password) return res.status(400).json({ message: '"password" is required' });
  next();
};

const validUserFields = (req: Request, res: Response, next: NextFunction) => {

};

export {
  validLoginFields,
  validUserFields,
};
