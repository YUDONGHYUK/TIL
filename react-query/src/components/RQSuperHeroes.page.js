// fetch data using react-query

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes1');
};

const RQSuperHeroesPage = () => {
  const [interval, setInterval] = useState(3000);
  console.log('interval : ', interval);

  const onSuccess = (data) => {
    if (data.data.length === 4) {
      setInterval(false);
    }
    // console.log('Perform side effect after data fetching', data);
  };

  const onError = (error) => {
    if (error) {
      setInterval(false);
    }
    // console.log('Perform side effect after encountering error', error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    ['super-heroes'],
    fetchSuperHeroes,
    {
      // staleTime: 30000,
      // refetchOnMount: false,
      // refetchOnWindowFocus: true,
      // enabled: false,
      refetchInterval: interval,
      refetchIntervalInBackground: true,
      onSuccess,
      onError,
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
