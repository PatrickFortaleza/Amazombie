import { createReducer, on } from '@ngrx/store';
import { add } from './products.actions';


export interface State {
  cart: Array<Object>
}

export const initialState = {
  cart: [  {
    title: 'Tier A',
    price: 399.99,
    id: 1,
  },
  {
    title: 'Tier B',
    price: 599.99,
    id: 2,
  },
  {
    title: 'Tier C',
    price: 899.99,
    id: 3,
  }],
};

const _productReducer = createReducer(
  initialState,
  on(add, (state, { item }) => ({ 
    ...state, cart: [ item, ...state.cart] 
  }))
);

export function productReducer(state, action) {
  // console.log(state, action)
  return _productReducer(state, action);
}