import { State } from './models/state.model'

export interface AppState {
  readonly product: State;
}

export const initialState: State = {
  cart: [],
  total: 0,
  subtotal: 0,
  shipping: 419.99,
  tax: 0,
}