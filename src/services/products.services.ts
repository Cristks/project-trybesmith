import connection from '../models/connection';
import ProductModel from '../models/products.models';
import { IProduct } from '../interfaces/Products.interface';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async adicProducts(product: IProduct) {
    return this.model.adicProducts(product);
  }

  async findAllProducts(): Promise<IProduct[]> {
    return this.model.findAllProducts();
  }

  async findOneProduct(id: number): Promise<IProduct> {
    return this.model.findOneProducts(id);
  }
}

export default ProductService;
