import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import Product from '../interfaces/product.inteface';

interface ProductWithRow extends Product, RowDataPacket{}

const ProductsModel = {
  getAll: async (): Promise<Product[]> => {
    const [result] = await connection
      .execute<ProductWithRow[]>('SELECT * FROM Trybesmith.Products;');
    return result;
  },

};

export default ProductsModel;