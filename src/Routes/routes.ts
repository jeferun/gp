import React from 'react';

// modules
const LazyCatalog = React.lazy(() => import('modules/Catalog'));
const LazyRentals = React.lazy(() => import('modules/Rentals'));

// config routes
const routesLink =  [
  {
    path: '/catalog',
    Component: LazyCatalog,
  },
  {
    path: '/',
    Component: LazyRentals,
  }
];

export default routesLink;

