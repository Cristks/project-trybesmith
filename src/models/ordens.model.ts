import { Pool } from 'mysql2/promise';
import { IOrders } from '../interfaces/Orders.Interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  // https://universodosdados.com/tag/json_arrayagg/

  public async findAllOrders(): Promise<IOrders[]> {
    const query = `SELECT orders.id, orders.user_id AS userId,
      JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.orders AS orders
      INNER JOIN Trybesmith.products AS products
      ON orders.id = products.order_id
      GROUP BY orders.id`;

    const [ordersIds] = await this.connection.execute(query);

    return ordersIds as IOrders[];
  }   
}