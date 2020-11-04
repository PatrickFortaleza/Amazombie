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
          let currstate1 = newState(state, {
            cart: [...state.cart, action.payload],
            total: 0
          })
          // condense the cart if there are multiple
          const condenseCart = Object.values([...currstate1.cart].reduce((item, { id, quantity, title, price }) => {
            item[id] = { id, quantity: (item[id] ? item[id].quantity : 0) + quantity, title, price  }
            return item;
          }, {}));
          currstate1.cart = condenseCart;

          // Get totals
          let totalPrices = currstate1.cart.map((c) => {
            let totalPrice = c.quantity * c.price
            return totalPrice
          }).reduce((a, b) => a + b, 0);

          currstate1.total = totalPrices.toFixed(2);
          
          return currstate1;
      case ProductActions.DEC_PRODUCT:
          let currstate2 = newState(state, {
            cart: state.cart,
            total: state.total
          })

          const decreasedCart = Object.values([...currstate2.cart].map((c) => {
            if(c.id === action.payload && c.quantity > 1){
              // c[quantity] = 
             c = {...c, quantity: c.quantity - 1}
             return c;
            }else{
              return c;
            }
          }, {}))
          
          currstate2.cart = decreasedCart;

          let totalPrices2 = currstate2.cart.map((c) => {
            let totalPrice = c.quantity * c.price
            return totalPrice
          }).reduce((a, b) => a + b, 0);

          currstate2.total = totalPrices2.toFixed(2);
          return currstate2;
      case ProductActions.DEL_PRODUCT:
        console.log(`Delete? ${action.payload}`);
        let currstate3 = newState(state, {
          cart: state.cart,
          total: state.total
        })

        const deletedCart = currstate3.cart.filter((c) => {
          return c.id != action.payload
        })

        currstate3.cart = deletedCart;

        let totalPrices3 = currstate3.cart.map((c) => {
          let totalPrice = c.quantity * c.price
          return totalPrice
        }).reduce((a, b) => a + b, 0);

        currstate3.total = totalPrices3;


        return currstate3;
      default:
          return state;
  }
}