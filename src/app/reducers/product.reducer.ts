import { Action } from '@ngrx/store'
import { Product } from './../models/product.model'
import * as ProductActions from './../actions/product.actions'


export interface State {
  products: Array<Product>,
  total: Number
}

const initialState: State = {
  products: [
      {
        title: 'Tier A',
        price: 399.99,
        id: 1,
      },
      {
        title: 'Tier A',
        price: 399.99,
        id: 1,
      },
  ],
  total: 0
}

const newState = (state, newData) => {
  return Object.assign({}, state, newData)
}

export function reducer(state: State = initialState, action: ProductActions.Actions) {
  switch(action.type) {
      case ProductActions.ADD_PRODUCT:
          // return {
          //   ...state,
          //   products: [...state.products, action.payload],
          //   total: state.total += 1 
          // }
          return newState(state, {
            products: [...state.products, action.payload],
            total: +state.products.reduce((a,b) => a + b.price, 0).toFixed(2)
          })
      default:
          return state;
  }
}