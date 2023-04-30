import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Main from './Main';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from '../../redux/store';

const store = createStore();

describe('Main', () => {
  it('Renders', async () => {
    const { findAllByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
    expect(findAllByText(/Main/i)).toBeDefined();
  });
  test('API', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
    expect(await findByText('Title')).toBeInTheDocument();
  });
});
