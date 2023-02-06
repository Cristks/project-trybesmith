export interface IUser {
  id?: number,
  username: string;
  vocation: string;
  level: number;
  password: string;
}
  
export interface ProductsInterface extends IUser {
  id: number;
}