import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const router = Router();
const productsController = new ProductsController();

router.post('/', productsController.adicProducts);
router.get('/', (req, res) => productsController.findAllProduct(req, res)); // monitoria vallin 26:02 - chamando req-res - chamar o metodo corretamente para nao perder o this. tipo pequeno middelware
router.get('/:id', (req, res) => productsController.findOneProduct(req, res));

export default router;