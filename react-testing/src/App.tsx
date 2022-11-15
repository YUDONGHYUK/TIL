import AppProviders from './providers/AppProviders';
import MuiMode from './components/Mui/MuiMode';
import './App.css';

function App() {
  return (
    <AppProviders>
      <div className='App'>
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
