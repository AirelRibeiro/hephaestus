import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

const ProductsController = {
  getAll: async (_req: Request, res: Response): Promise<Response> => {
    const products = await ProductsService.getAll();
    return res.status(200).json(products);
  },
};

export default ProductsController;
