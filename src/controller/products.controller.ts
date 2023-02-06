import { Request, Response } from 'express';
import ProductService from '../services/products.services';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public adicProducts = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const result = await this.productService.adicProducts({ name, amount });
    return res.status(201).json(result);
  };

  async findAllProduct(_req: Request, res: Response): Promise<void> {
    const result = await this.productService.findAllProducts();
    res.status(200).json(result);
  }

  async findOneProduct(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const result = await this.productService.findOneProduct(Number(id));
    res.status(200).json(result);
  }
}

export default ProductController;