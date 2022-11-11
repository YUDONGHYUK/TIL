import Skills from './components/Skills/Skills';
import './App.css';

function App() {
  const skills = ['HTML', 'CSS'];

  return (
    <div className='App'>
      <Skills skills={skills} />
    </div>
  );
}

export default App;
