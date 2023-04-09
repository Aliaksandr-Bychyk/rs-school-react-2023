import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Main from './Main';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('Main', () => {
  it('Renders', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    expect(screen.getAllByText(/Main/i)).toBeDefined();
  });
  test('API', async () => {
    const { findByText } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(await findByText('Title')).toBeInTheDocument();
  });
});
