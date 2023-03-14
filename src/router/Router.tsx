import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../components/Header/Header';
import AboutUs from '../pages/AboutUs';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';

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
