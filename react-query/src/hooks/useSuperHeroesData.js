import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes', hero);
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(['super-heroes'], fetchSuperHeroes, {
    onSuccess,
    onError,
    // select: (data) => {
    //   const heroNames = data.data.map((hero) => hero.name);

    //   return heroNames;
    // },
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();

  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries(['super-heroes']);
    //   queryClient.setQueryData(['super-heroes'], (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
    onMutate: async (newHero) => {
      await queryClient.cancelQueries(['super-heroes']);
      const previousHeroData = queryClient.getQueryData(['super-heroes']);
      console.log('newHero: ', newHero);

      queryClient.setQueryData(['super-heroes'], (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });

      return { previousHeroData };
    },

    onError: (_error, _hero, context) => {
      console.log('context : ', context);
      queryClient.setQueryData(['super-heroes'], context.previousHeroData);
    },

    onSettled: () => {
      queryClient.invalidateQueries(['super-heroes']);
    },
  });
};
