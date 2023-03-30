import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from '../pages/AboutUs/AboutUs';
import Main from '../pages/Main/Main';
import Form from '../pages/Form/Form';
import NotFound from '../pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
    errorElement: <NotFound />,
  },
  {
    path: '/form',
    element: <Form />,
    errorElement: <NotFound />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
