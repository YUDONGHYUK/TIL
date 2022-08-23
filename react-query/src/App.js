import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import HomePage from './components/Home.page';
import InfiniteQueriesPage from './components/InfiniteQueries.page';
import PaginatedQueriesPage from './components/PaginatedQueries.page';
import DependentQueriesPage from './components/DependentQueries.page';
import DynamicParallelPage from './components/DynamicParallel.page';
import ParallelQueriesPage from './components/ParallelQueries.page';
import RQSuperHeroPage from './components/RQSuperHero.Page';
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
            <Route path='rq-infinite' element={<InfiniteQueriesPage />} />
            <Route path='rq-paginated' element={<PaginatedQueriesPage />} />
            <Route
              path='/rq-dependent'
              element={<DependentQueriesPage email='doyu@example.com' />}
            />
            <Route
              path='rq-dynamic-parallel'
              element={<DynamicParallelPage heroIds={[1, 3]} />}
            />
            <Route path='/rq-parallel' element={<ParallelQueriesPage />} />
            <Route
              path='/rq-super-heroes/:heroId'
              element={<RQSuperHeroPage />}
            />
            <Route path='/super-heroes' element={<SuperHeroesPage />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
