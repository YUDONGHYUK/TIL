const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED';

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const initialState = {
  numOfCakes: 10,
};

// (previoursState, action) => newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
// since we have not performed any state transitions yet.
// getState should effectively give us the initial state of our application.
console.log('Initial state ', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('Update state ', store.getState())
);

store.dispatch({
  type: CAKE_ORDERED,
  quantity: 1,
});
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();

store.dispatch(orderCake());
store.dispatch(orderCake());
