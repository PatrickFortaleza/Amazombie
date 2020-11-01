import { Action } from '@ngrx/store';

export function simpleReducer(state = {
  cart: []
}, action){
  console.log(action, state);

  switch(action.type){
    case 'ADD':
      return {
        ...state,
        cart: [action.payload, ...state.cart]
      }
    default:
      return state;
  }
}