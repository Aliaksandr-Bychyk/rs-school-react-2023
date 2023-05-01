import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Router from './Router';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from '../redux/store';

const store = createStore();

describe('Router', async () => {
  it('Renders', () => {
    const { findAllByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
    );
    expect(findAllByText(/MAIN/i)).toBeDefined();
  });
});
