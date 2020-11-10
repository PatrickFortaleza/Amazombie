import { State } from '../models/state.model'
import * as ProductActions from './../actions/product.actions';
import { initialState } from '../app.state';

// Allows us to mutate state
const newState = (state, newData) => {
  return Object.assign({}, state, newData)
}

// function that saves state to localstorage
function setSavedState(state: State, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}

// function that gets saved state from local storage
function getSavedState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

// the key for the local storage.
const localStorageKey = '__app_storage__';

export function reducer(state: State = initialState, action: ProductActions.Actions) {
  switch(action.type) {
      case ProductActions.INIT_CART:
          // Retrieved local storage state
          const savedState = getSavedState(localStorageKey);

          // Check if there is anything in local storage
          if( savedState && savedState.cart.length > 1 && savedState.total > 0){
            // if there is, reassign state
            let currstate0 = newState(state, {
              cart: savedState.cart || [],
              total: savedState.total || 0,
            })
            return currstate0;
          }else{
            // if there isnt anything in local storage, just return state.
            return state;
          }

      case ProductActions.ADD_PRODUCT:
          // Initialize a new state object, with the addition of a new product
          let currstate1 = newState(state, {
            cart: [...state.cart, action.payload],
            total: 0
          })
          // condense the cart if there are multiple, finds matching id's and increases quantity
          const condenseCart = Object.values([...currstate1.cart].reduce((item, { id, quantity, title, subtitle, imagePath, desc, price }) => {
            item[id] = { id, quantity: (item[id] ? item[id].quantity : 0) + quantity, title, subtitle, imagePath, desc, price  }
            return item;
          }, {}));
          // Reassign the state's cart object to the condensed cart
          currstate1.cart = condenseCart;
          // Perform map reduce to get the total prices of all items 
          let totalPrices = currstate1.cart.map((c) => {
            let totalPrice = c.quantity * c.price
            return totalPrice
          }).reduce((a, b) => a + b, 0);
          // Reassign the total to the current state
          currstate1.total = totalPrices.toFixed(2);
          // Save state to local storage
          setSavedState(currstate1, localStorageKey);
          // Return mutated state
          return currstate1;
      case ProductActions.DEC_PRODUCT:
          // Initialize a new state object
          let currstate2 = newState(state, {
            cart: state.cart,
            total: state.total
          })
          // Decrease the quantity of the item based on ID from action.payload
          const decreasedCart = Object.values([...currstate2.cart].map((c) => {
            if(c.id === action.payload && c.quantity > 1){
             c = {...c, quantity: c.quantity - 1}
             return c;
            }else{
              return c;
            }
          }, {}))
          //Reassign the cart array to the decreased cart
          currstate2.cart = decreasedCart;
          // Calculate total prices of the cart using map reduce
          let totalPrices2 = currstate2.cart.map((c) => {
            let totalPrice = c.quantity * c.price
            return totalPrice
          }).reduce((a, b) => a + b, 0);
          // reassign the total to the mutated state total
          currstate2.total = totalPrices2.toFixed(2);
          // save state to localstorage
          setSavedState(currstate2, localStorageKey);
          // Return mutated state
          return currstate2;
      case ProductActions.DEL_PRODUCT:
        // Initialize a new state object
        let currstate3 = newState(state, {
          cart: state.cart,
          total: state.total
        })
        // filter through the current cart, return items that have an id that != action.payload which is an id
        const deletedCart = currstate3.cart.filter((c) => {
          return c.id != action.payload
        })
        // Reassign the cart state to the new array from above
        currstate3.cart = deletedCart;
        // Calculate total prices of the cart using map reduce
        let totalPrices3 = currstate3.cart.map((c) => {
          let totalPrice = c.quantity * c.price
          return totalPrice
        }).reduce((a, b) => a + b, 0);
        // reassign the cart total to the mutated state total
        currstate3.total = totalPrices3.toFixed(2);
        // save state to localstorage
        setSavedState(currstate3, localStorageKey);
        // Return new state
        return currstate3;
      default:
          return state;
  }
}