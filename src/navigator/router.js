import React from 'react';

const Dashboard = React.lazy(() => import('views/Dashboard'));
const Colors = React.lazy(() => import('views/Theme/Colors'));
const Icons = React.lazy(() => import('views/Theme/Icons'));

export const router = {
  Home: {
    path: '/',
    exact: true,
    name: 'Home',
  },
  Dashboard: {
    path: '/dashboard',
    name: 'Dashboard',
    render: Dashboard,
  },
  Colors: {
    path: '/theme/colors',
    name: 'Colors',
    render: Colors,
  },
  Icons: {
    path: '/theme/icons',
    name: 'Icons',
    render: Icons,
  },
};

export default Object.values(router);
