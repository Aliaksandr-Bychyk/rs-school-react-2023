import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/Router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
