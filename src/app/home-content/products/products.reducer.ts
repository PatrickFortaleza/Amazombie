import { createReducer, on } from '@ngrx/store';
import { add } from './products.actions';


export interface State {
  cart: Array<Object>
}

export const initialState = {
  cart: [],
};

const _productReducer = createReducer(
  initialState,
  on(add, (state, { item }) => ({ ...state, cart: [ item, ...state.cart] }))
);

export function productReducer(state, action) {
  return _productReducer(state, action);
}