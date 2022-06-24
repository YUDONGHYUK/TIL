import React from 'react';
import './App.css';
import ComponentC from './components/useContext/ComponentC';

export const UserContext = React.createContext();
export const AgeContext = React.createContext();

function App() {
  return (
    <div className='App'>
      <UserContext.Provider value={'Doyu'}>
        <AgeContext.Provider value={30}>
          <ComponentC />
        </AgeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
