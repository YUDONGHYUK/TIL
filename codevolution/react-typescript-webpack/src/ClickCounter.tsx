import { useState } from 'react';

export const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Count {count}
      </button>
    </div>
  );
};
