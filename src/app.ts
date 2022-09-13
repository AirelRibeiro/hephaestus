import express from 'express';
import productsRoute from './routes/products.routes';
import usersRoute from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);

export default app;
