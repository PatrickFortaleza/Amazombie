import { Product } from './models/product.model';
import { State } from './reducers/product.reducer'

export interface AppState {
  readonly product: State;
}