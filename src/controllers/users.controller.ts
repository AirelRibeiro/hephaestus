import { Request, Response } from 'express';
import UsersService from '../services/users.service';

const UsersController = {
  create: async (req: Request, res: Response): Promise<Response> => {
    const token = await UsersService.create(req.body);
    return res.status(201).json(token);
  },

  login: async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const token = await UsersService.login(username, password);
    if (typeof token !== 'string') return res.status(200).json(token);
    return res.status(401).json({ message: token });
  },
};

export default UsersController;
