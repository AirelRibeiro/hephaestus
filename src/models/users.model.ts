import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import User from '../interfaces/user.interface';

const UsersModel = {
  create: async ({ username, classe, level, password }: User): Promise<number> => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?);`;
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    return insertId;
  },

  login: async (username: string, password: string): Promise<User> => {
    const query = `
    SELECT * FROM Trybesmith.Users AS users
    WHERE users.username = ? AND users.password = ?`;
    const [user] = await connection
      .execute<RowDataPacket[]>(query, [username, password]);
    return user[0] as User;
  },
};

export default UsersModel;