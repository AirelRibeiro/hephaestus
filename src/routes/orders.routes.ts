import express from 'express';
import OrdersController from '../controllers/orders.controller';
import validOrderInsertion from '../middlewares/ordersValidation';

const ordersRoute = express.Router();

ordersRoute.get('/', OrdersController.getAll);
ordersRoute.post('/', validOrderInsertion, OrdersController.create);

export default ordersRoute;
