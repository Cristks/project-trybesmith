export interface IProduct {
  id?: number;
  name: string;
  amount: number;
}

export interface ProductsInterface extends IProduct {
  id: number;
}
