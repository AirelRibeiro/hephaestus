import Product from '../interfaces/product.inteface';
import ProductsModel from '../models/products.model';

const ProductsService = {
  create: async ({ name, amount }: Product): Promise<Product> => {
    const product = await ProductsModel.create({ name, amount });
    return product;
  },

  getAll: async (): Promise<Product[]> => {
    const products = await ProductsModel.getAll();
    return products;
  },
};

export default ProductsService;
