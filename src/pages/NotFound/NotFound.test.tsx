import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NotFound from './NotFound';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound', () => {
  it('Renders', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    expect(screen.getAllByText(/404/i)).toBeDefined();
  });
});
