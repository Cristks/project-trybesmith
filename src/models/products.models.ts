// import connection from './connection';
import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

  async findAllProducts(): Promise<IProduct[]> { // retorna um array de produtos
    const [result] = await this.connection.execute<(IProduct & RowDataPacket)[]>( // retorna um array dos nosso produtos mais a tipagem (video Vallin)
      'SELECT * FROM Trybesmith.products ORDER BY id');

    return result;
  }

  async findOneProducts(id: number): Promise<IProduct> {
    const [[result]] = await this.connection.execute<(// results com array pq o retorno tem que ser só um arrray que volta dentro do array de tudo. 
    IProduct & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.products WHERE products.id =?',
      [id],
      );
    return result;
  }
}
