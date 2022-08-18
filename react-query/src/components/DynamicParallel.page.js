import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelPage = ({ heroIds }) => {
  const queryResults = useQueries({
    queries: heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: fetchSuperHero,
      };
    }),
  });

  console.log({ queryResults });

  return <div>DynamicParallelPage</div>;
};

export default DynamicParallelPage;
