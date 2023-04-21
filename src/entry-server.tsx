import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';
import Router from './router/Router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export function render(url: string, options: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <Router />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    options
  );
}
