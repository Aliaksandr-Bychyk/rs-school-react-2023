import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutUs from '../pages/AboutUs/AboutUs';
import Main from '../pages/Main/Main';
import Form from '../pages/Form/Form';
import NotFound from '../pages/NotFound/NotFound';

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/form" element={<Form />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default Router;
