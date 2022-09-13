import { Request, Response } from 'express';
import UsersService from '../services/users.service';

const UsersController = {
  create: async (req: Request, res: Response): Promise<Response> => {
    const token = await UsersService.create(req.body);
    return res.status(201).json(token);
  },
};

export default UsersController;
