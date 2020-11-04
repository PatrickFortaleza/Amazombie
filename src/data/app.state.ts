import { State } from './models/state.model'

export interface AppState {
  readonly product: State;
}

export const initialState: State = {
  cart: [],
  total: 0
}