import React from 'react';

const Home = React.lazy(() => import('views/Home'));
const Colors = React.lazy(() => import('views/Theme/Colors'));
const Icons = React.lazy(() => import('views/Theme/Icons'));

export const router = {
  Home: {
    path: '/home',
    exact: true,
    name: 'Home',
    render: Home,
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
