// fetch data using react-query

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching');
  };

  const onError = (error) => {
    console.log('Perform side effect after encountering error');
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    ['super-heroes'],
    fetchSuperHeroes,
    {
      // staleTime: 30000,
      // refetchOnMount: false,
      // refetchOnWindowFocus: true,
      // enabled: false,
      // refetchInterval: interval,
      // refetchIntervalInBackground: true,
      onSuccess,
      onError,
      select: (data) => {
        const heroNames = data.data.map((hero) => hero.name);
        return heroNames;
      },
    }
  );

  console.log(data);

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
      {/* {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })} */}
      {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))}
    </>
  );
};

export default RQSuperHeroesPage;
