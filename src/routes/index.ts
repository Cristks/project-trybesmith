import { Router } from 'express';
import productRouter from './product.router';
import userRoute from './user.router';

const routers = Router();

routers.use('/products', productRouter);
routers.use('/users', userRoute);

export default routers;