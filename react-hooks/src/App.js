import React from 'react';
// import FocusInput from './components/useRef/FocusInput';
import ClassTimer from './components/useRef/ClassTimer';
import HookTimer from './components/useRef/HookTimer';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <FocusInput /> */}
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
