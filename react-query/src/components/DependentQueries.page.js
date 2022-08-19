import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUserByEmail = ({ queryKey }) => {
  const email = queryKey[1];
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = ({ queryKey }) => {
  const channelId = queryKey[1];
  return axios.get(`http://localhost:4000/channel/${channelId}`);
};

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(['user', email], fetchUserByEmail);
  const channelId = user?.data.channelId;

  useQuery(['courses', channelId], fetchCoursesByChannelId, {
    enabled: !!channelId,
  });

  return <div>DependentQueries</div>;
};

export default DependentQueriesPage;
