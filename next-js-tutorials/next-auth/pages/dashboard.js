import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';

function Dashboard() {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') signIn();
  }, [status]);

  if (status !== 'authenticated') return <h1>Loading...</h1>;
  return <h1>Dashboard Page</h1>;
}

export default Dashboard;
