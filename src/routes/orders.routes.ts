import express from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersRoute = express.Router();

ordersRoute.get('/', OrdersController.getAll);

export default ordersRoute;
