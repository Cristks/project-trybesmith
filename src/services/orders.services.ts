import connection from '../models/connection';
import OrderModel from '../models/ordens.model';
import { IOrders } from '../interfaces/Orders.Interface';

class OrdersService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async findAllOrders(): Promise<IOrders[]> {
    return this.model.findAllOrders();
  }
}

export default OrdersService;