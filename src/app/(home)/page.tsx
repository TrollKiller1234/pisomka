'use client';

import { useSession } from 'next-auth/react';
import NonAuthHomeView from '@/sections/NonAuthHomeView';
import AuthHomeView from '@/sections/AuthHomeView';

const HomePage: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    // You can return a loading spinner while session is being fetched
    return <div>Loading...</div>;
  }

  if (session) {
    // User is authenticated, show the Authenticated Home View
    return <AuthHomeView />;
  } else {
    // User is not authenticated, show the Non-Authenticated Home View
    return <NonAuthHomeView />;
  }
};

export default HomePage;


