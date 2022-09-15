import { Request, Response } from 'express';
import DataToken from '../interfaces/dataToken.interface';
import OrdersService from '../services/orders.service';

interface ReqWithUser extends Request {
  user: DataToken
}

const OrdersController = {
  getAll: async (_req: Request, res: Response): Promise<Response> => {
    const orders = await OrdersService.getAll();
    return res.status(200).json(orders);
  },

  create: async (req: Request, res: Response): Promise<Response> => {
    const userId = (req as ReqWithUser).user.data.id;
    const { productsIds } = req.body;
    return OrdersService.create(userId, productsIds)
      .then(() => res.status(201).json({ userId, productsIds }));
  },
};

export default OrdersController;
