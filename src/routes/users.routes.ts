import express from 'express';
import UsersController from '../controllers/users.controller';

const usersRoute = express.Router();

usersRoute.post('/', UsersController.create);

export default usersRoute;