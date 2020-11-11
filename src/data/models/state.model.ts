import { Product } from './product.model';

export interface State {
  cart: Array<Product>,
  total: number,
  subtotal: number,
  shipping: number,
  tax: number,
}