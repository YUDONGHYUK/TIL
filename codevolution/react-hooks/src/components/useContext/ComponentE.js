import React, { useContext } from 'react';
// import ComponentF from './ComponentF';
import { UserContext, AgeContext } from '../../App';

const ComponentE = () => {
  const user = useContext(UserContext);
  const age = useContext(AgeContext);
  return (
    <div>
      {user} - {age}
    </div>
  );
};

export default ComponentE;
