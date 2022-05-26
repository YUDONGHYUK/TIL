import React from 'react';
import CountUp from 'react-countup';

const TestCountUp = () => {
  return (
    <div>
      <h1>
        <CountUp end={200} />
      </h1>
      <h1>
        <CountUp start={500} end={1000} duration={5} />
      </h1>
      <h1>
        <CountUp end={1000} duration={5} prefix='$' decimals={2} />
      </h1>
      <h1>
        <CountUp end={1000} duration={5} suffix='USD' decimals={2} />
      </h1>
    </div>
  );
};

export default TestCountUp;
