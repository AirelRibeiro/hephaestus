import express from 'express';
import UsersController from '../controllers/users.controller';
import { validUserFields } from '../middlewares/userValidation';

const usersRoute = express.Router();

usersRoute.post('/', validUserFields, UsersController.create);

export default usersRoute;