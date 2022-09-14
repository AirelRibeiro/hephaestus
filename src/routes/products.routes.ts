import express from 'express';
import ProductsController from '../controllers/products.controller';
import validProductFields from '../middlewares/productsValidation';

const productsRoute = express.Router();

productsRoute.get('/', ProductsController.getAll);
productsRoute.post('/', validProductFields, ProductsController.create);

export default productsRoute;
