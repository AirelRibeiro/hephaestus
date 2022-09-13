import { RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/order.interface';
import connection from './connection';

interface OrderWithRow extends Order, RowDataPacket{}

const OrdersModel = {
};

export default OrdersModel;
