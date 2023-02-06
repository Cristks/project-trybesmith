import connection from '../models/connection';
import ProductModel from '../models/products.models';
import { IProduct } from '../interfaces/Products.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async adicProducts(product: IProduct) {
    return this.model.adicProducts(product);
  }
}

export default ProductService;
