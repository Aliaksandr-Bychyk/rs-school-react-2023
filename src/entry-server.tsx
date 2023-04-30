import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';
import Router from './router/Router';
import { Provider } from 'react-redux';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

export function render(url: string, store: ToolkitStore, options: RenderToPipeableStreamOptions) {
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
