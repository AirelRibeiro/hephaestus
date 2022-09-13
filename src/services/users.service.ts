import jwt from 'jsonwebtoken';
import JWTToken from '../interfaces/token.interface';
import User from '../interfaces/user.interface';
import UsersModel from '../models/users.model';

const UsersService = {
  create: async ({ username, classe, level, password }: User): Promise<JWTToken> => {
    const id = await UsersModel.create({ username, classe, level, password });
    const token = jwt
      .sign({ data: { username, id } }, 'JWT_SECRET', { algorithm: 'HS256' });
    return { token };
  },
};

export default UsersService;
