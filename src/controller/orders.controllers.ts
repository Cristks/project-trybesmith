import { Request, Response } from 'express';
import OrdersService from '../services/orders.services';

class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  async findAllOrders(_req: Request, res: Response): Promise<void> {
    const result = await this.ordersService.findAllOrders();
    res.status(200).json(result);
  }
}

export default OrdersController;