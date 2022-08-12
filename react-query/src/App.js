import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import HomePage from './components/Home.page';
import RQSuperHeroesPage from './components/RQSuperHeroes.page';
import SuperHeroesPage from './components/SuperHeroes.page';
import './App.css';

const queryClient = new QueryClient();

function App() {
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink style={NavLinkStyles} to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={NavLinkStyles} to='/super-heroes'>
                  Traditional Super Heroes
                </NavLink>
              </li>
              <li>
                <NavLink style={NavLinkStyles} to='/rq-super-heroes'>
                  RQ Super Heroes
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/super-heroes' element={<SuperHeroesPage />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
