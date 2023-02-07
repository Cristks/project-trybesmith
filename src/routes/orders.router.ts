import { Router } from 'express';
import OrdersController from '../controller/orders.controllers';

const orderRouter = Router();
const ordersController = new OrdersController();

orderRouter.get('/', (req, res) => ordersController.findAllOrders(req, res));
export default orderRouter;