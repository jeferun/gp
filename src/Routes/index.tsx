import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// layouts
import Layout from 'layouts';
// routes
import routesLink from './routes';

const getRoutes = () => (
  routesLink.map((route, count) => {
    const { Component, path } = route;
    const key = `${route.path}-${count}`;

    return (
      <Route
        key={key}
        path={path}
        element={
          <React.Suspense fallback='Loanding...'>
            <Component />
          </React.Suspense>
        }
      />
    );
  })
);

function routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {getRoutes()}
          {/* page 404 */}
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default routes;
