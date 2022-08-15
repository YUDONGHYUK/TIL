// fetch data using react-query

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    ['super-heroes'],
    fetchSuperHeroes,
    {
      // staleTime: 30000,
      // refetchOnMount: false,
      // refetchOnWindowFocus: true,
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true,
      enabled: false,
    }
  );

  console.log({ isLoading, isFetching });

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Rq Super Heroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroesPage;
