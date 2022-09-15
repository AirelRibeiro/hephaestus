import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Product from '../interfaces/product.inteface';

interface ProductWithRow extends Product, RowDataPacket{}

const ProductsModel = {
  create: async ({ name, amount }: Product): Promise<Product> => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
    return { id: insertId, name, amount };
  },

  getAll: async (): Promise<Product[]> => {
    const [result] = await connection
      .execute<ProductWithRow[]>('SELECT * FROM Trybesmith.Products;');
    return result;
  },
};

export default ProductsModel;