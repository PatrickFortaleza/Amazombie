import { Product } from './product.model';

export interface State {
  cart: Array<Product>,
  total: number
}