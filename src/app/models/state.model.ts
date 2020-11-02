import { Product } from './product.model';

export interface State {
  products: Array<Product>,
  total: Number
}