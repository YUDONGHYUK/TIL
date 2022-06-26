import React, { useContext } from 'react';
import { CountConext } from '../../App';

const ComponentA = () => {
  const countContext = useContext(CountConext);

  return (
    <div>
      Component A
      <button onClick={() => countContext.countDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch('decrement')}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  );
};

export default ComponentA;
