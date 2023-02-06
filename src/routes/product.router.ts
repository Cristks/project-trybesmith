import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const productRouter = Router();
const productsController = new ProductsController();

productRouter.post('/', productsController.adicProducts);

export default productRouter;