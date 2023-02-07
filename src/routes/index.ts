import { Router } from 'express';
import productRouter from './product.router';
import userRoute from './user.router';
import orderRouter from './orders.router';

const routers = Router();

routers.use('/products', productRouter);
routers.use('/users', userRoute);
routers.use('/orders', orderRouter);

export default routers;