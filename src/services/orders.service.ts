import Order from '../interfaces/order.interface';
import OrdersModel from '../models/orders.model';

const OrdersService = {
  getAll: async (): Promise<Order[]> => {
    const orders = await OrdersModel.getAll();
    return orders;
  },

  create: async (userId: number, productsIds: number[]) => {
    const insert = await OrdersModel.create(userId, productsIds);
    return insert;
  },
};

export default OrdersService;
