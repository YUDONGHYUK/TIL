import React, { useState, useEffect } from 'react';

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    console.log('tick');
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
};

export default IntervalHookCounter;
