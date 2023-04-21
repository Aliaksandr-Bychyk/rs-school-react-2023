import React from 'react';
import Router from './router/Router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

export function render(url: string | Partial<Location>) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <Router />
      </Provider>
    </StaticRouter>
  );
  return { html };
}
