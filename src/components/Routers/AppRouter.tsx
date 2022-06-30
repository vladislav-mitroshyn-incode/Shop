import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../router';
import ScrollToTop from '../UI/ScrollToTop/ScrollToTop';

const AppRouter = () => {
  return (
    <ScrollToTop>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} key={route.path} />
        ))}
      </Routes>
    </ScrollToTop>
  );
};

export default AppRouter;
