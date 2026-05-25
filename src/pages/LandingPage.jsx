import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LandingPage;
