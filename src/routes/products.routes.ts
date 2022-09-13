import express from 'express';
import ProductsController from '../controllers/products.controller';

const productsRoute = express.Router();

productsRoute.get('/', ProductsController.getAll);
productsRoute.post('/', ProductsController.create);

export default productsRoute;
