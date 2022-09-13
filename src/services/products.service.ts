import Product from '../interfaces/product.inteface';
import ProductsModel from '../models/products.model';

const ProductsService = {
  getAll: async (): Promise<Product[]> => {
    const products = await ProductsModel.getAll();
    return products;
  },
};

export default ProductsService;
