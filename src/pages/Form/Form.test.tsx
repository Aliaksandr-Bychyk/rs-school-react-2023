import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import Form from './Form';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('Accordion', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
    );
  });

  test('should show title all the time', () => {
    expect(screen.getAllByText(/Form/i)).toBeDefined();
  });

  test('should not show the popup at the start', () => {
    expect(screen.queryByText(/Fail! Please check!/i)).not.toBeInTheDocument();
  });

  test('should show the popup on accordion click', async () => {
    const title = screen.getByText(/Submit/i);
    fireEvent.click(title);

    expect(await screen.findByText(/Fail! Please check!/i)).toBeInTheDocument();
  });
});
