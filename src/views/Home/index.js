import React from 'react'
import { useRoutes } from 'react-router';
import Router from 'src/routes/Router';

const Home = () => {
  const routing = useRoutes(Router);

  return (
    <div>
        {routing}
    </div>
  )
}

export default Home