import { Router } from 'express';
import productRouter from './product.router';

const routers = Router();

routers.use('/products', productRouter);

export default routers;