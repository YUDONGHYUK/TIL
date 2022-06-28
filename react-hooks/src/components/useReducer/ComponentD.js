import React, { useContext } from 'react';
import { CountConext } from '../../App';

const ComponentD = () => {
  const countContext = useContext(CountConext);

  return (
    <div>
      Component D
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

export default ComponentD;
