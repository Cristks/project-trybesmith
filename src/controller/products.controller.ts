import { Request, Response } from 'express';
import ProductService from '../services/products.services';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public adicProducts = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const result = await this.productService.adicProducts({ name, amount });
    return res.status(201).json(result);
  };
}

export default ProductController;