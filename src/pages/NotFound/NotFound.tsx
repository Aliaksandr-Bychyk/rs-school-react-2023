import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import './NotFound.css';

const NotFound: FC = () => {
  return (
    <>
      <Header title="404" />
      <div className="not-found-container">
        <h2 className="error-code">404</h2>
        <p className="error-message">Oops... Something went wrong!</p>
      </div>
    </>
  );
};

export default NotFound;
