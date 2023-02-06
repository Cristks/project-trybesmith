// import connection from './connection';
import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/Products.interface';

export default class ProductModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async adicProducts(product: IProduct) {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
  
    const newProduct = { id: insertId, ...product };
  
    return newProduct;
  }
}
