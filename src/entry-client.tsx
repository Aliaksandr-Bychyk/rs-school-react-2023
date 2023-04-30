import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import Router from './router/Router';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { RootState, createStore } from './redux/store';

interface IWindow {
  __PRELOADED_STATE__?: RootState;
}

const store = createStore((window as IWindow).__PRELOADED_STATE__);

delete (window as IWindow).__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
