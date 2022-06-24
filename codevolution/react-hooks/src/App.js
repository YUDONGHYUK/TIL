import './App.css';
import IntervalClassCounter from './components/useEffect/IntervalClassCounter';
import IntervalHookCounter from './components/useEffect/IntervalHookCounter';

function App() {
  return (
    <div className='App'>
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
