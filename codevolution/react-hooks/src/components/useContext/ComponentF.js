import React from 'react';
import { UserContext, AgeContext } from '../../App';

const ComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <AgeContext.Consumer>
              {(age) => {
                return (
                  <div>
                    User context value {user}, age {age}
                  </div>
                );
              }}
            </AgeContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;
