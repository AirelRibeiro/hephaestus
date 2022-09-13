import Order from '../interfaces/order.interface';
import OrdersModel from '../models/orders.model';

const OrdersService = {
  getAll: async (): Promise<Order[]> => {
    const orders = await OrdersModel.getAll();
    return orders;
  },
};

export default OrdersService;
