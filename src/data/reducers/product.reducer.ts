import { State } from '../models/state.model'
import * as ProductActions from './../actions/product.actions';
import { initialState } from '../app.state';


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
          let currstate = newState(state, {
            cart: [...state.cart, action.payload],
            total: 0
          })
          // condense the cart if there are multiple
          const condenseCart = Object.values([...currstate.cart].reduce((item, { id, quantity, title, price }) => {
            item[id] = { id, quantity: (item[id] ? item[id].quantity : 0) + quantity, title, price  }
            return item;
          }, {}));
          currstate.cart = condenseCart;

          // Get totals
          let totalPrices = currstate.cart.map((c) => {
            let totalPrice = c.quantity * c.price
            return totalPrice
          }).reduce((a, b) => a + b, 0);

          currstate.total = totalPrices.toFixed(2);
          
          return currstate;
      case ProductActions.DEC_PRODUCT:
          console.log(`Decreased (?) ${action.payload}`);
          let cstate = newState(state, {
            cart: state.cart,
            total: state.total
          })

          const decreasedCart = Object.values([...cstate.cart].map((c) => {
            if(c.id === action.payload && c.quantity > 1){
              // c[quantity] = 
             c = {...c, quantity: c.quantity - 1}
             return c;
            }else{
              return c;
            }
          }, {}))
          

          cstate.cart = decreasedCart;

          let totalPrices2 = cstate.cart.map((c) => {
            let totalPrice = c.quantity * c.price
            return totalPrice
          }).reduce((a, b) => a + b, 0);

          cstate.total = totalPrices2.toFixed(2);
          return cstate;
      default:
          return state;
  }
}