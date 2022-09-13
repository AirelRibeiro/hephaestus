import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

const OrdersController = {
  getAll: async (_req: Request, res: Response): Promise<Response> => {
    const orders = await OrdersService.getAll();
    return res.status(200).json(orders);
  },
};

export default OrdersController;
