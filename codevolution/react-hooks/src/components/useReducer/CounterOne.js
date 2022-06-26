import React, { useReducer } from 'react';

const initialState = 0;

// reducer 함수는 2개의 값을 받고 1개의 값을 반환한다.
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  // useReducer는 2개의 arguments를 받는다.
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};

export default CounterOne;
