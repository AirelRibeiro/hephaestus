import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/order.interface';
import connection from './connection';

interface OrderWithRow extends Order, RowDataPacket{}

const OrdersModel = {
  getAll: async (): Promise<Order[]> => {
    const query = `
    SELECT orders.id AS id, orders.userId AS userId, JSON_ARRAYAGG(product.id) AS productsIds
    FROM  Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Products AS product
    ON orders.id = product.orderId
    GROUP BY orders.id
    ORDER BY orders.userId ASC;
    `;
    const [result] = await connection
      .execute<OrderWithRow[]>(query);
    return result;
  },

  create: async (userId: number, productsIds: number[]) => {
    const query = `INSERT INTO Trybesmith.Orders (userId)
      VALUES (?);`;
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(query, [userId]);
    return Promise.all(productsIds.map((id) => (
      connection
        .execute('UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?', [insertId, id]))))
      .then(() => true);
  },
};

export default OrdersModel;
