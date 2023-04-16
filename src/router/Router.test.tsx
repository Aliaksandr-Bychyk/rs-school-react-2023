import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Router from './Router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('Router', async () => {
  it('Renders', () => {
    const { findAllByText } = render(
      <Provider store={store}>
        <Router />
      </Provider>
    );
    expect(findAllByText(/MAIN/i)).toBeDefined();
  });
});
