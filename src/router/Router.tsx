import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from '../pages/AboutUs/AboutUs';
import Main from '../pages/Main/Main';
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
    path: '*',
    element: <NotFound />,
  },
]);

class Router extends React.Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}

export default Router;
