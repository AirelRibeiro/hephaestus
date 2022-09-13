import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import User from '../interfaces/user.interface';

// interface UserWithRow extends User, RowDataPacket{}

const UsersModel = {
  create: async ({ username, classe, level, password }: User): Promise<number> => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?);`;
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    return insertId;
  },
};

export default UsersModel;