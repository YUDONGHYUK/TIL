const redux = require('redux');
const produce = require('immer').produce;

const initialState = {
  name: 'Doyu',
  address: {
    street: '123 Main St',
    city: 'Incheon',
    state: 'MA',
  },
};

const STREET_UPDATE = 'STREET_UPDATE';

const updateStreet = (street) => {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      // code is not as simple as i want to be
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log('Initial State ', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('Upadated State ', store.getState());
});
store.dispatch(updateStreet('456 Main St'));
unsubscribe();
