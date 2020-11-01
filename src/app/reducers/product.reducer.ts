import { Action } from '@ngrx/store'
import { Product } from './../models/product.model'
import * as ProductActions from './../actions/product.actions'

const initialState: Product = {
  title: 'Tier A',
  price: 399.99,
  id: 1,
}

export function reducer(state: Product[] = [initialState], action: ProductActions.Actions) {

  // Section 3
  switch(action.type) {
      case ProductActions.ADD_PRODUCT:
          return [...state, action.payload];
      default:
          return state;
  }
}