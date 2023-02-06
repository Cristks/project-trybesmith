import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const productRouter = Router();
const productsController = new ProductsController();

productRouter.post('/', productsController.adicProducts);
productRouter.get('/', (req, res) => productsController.findAllProduct(req, res)); // monitoria vallin 26:02 - chamando req-res - chamar o metodo corretamente para nao perder o this. tipo pequeno middelware

export default productRouter;