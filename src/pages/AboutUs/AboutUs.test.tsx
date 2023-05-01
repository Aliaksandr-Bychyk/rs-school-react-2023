import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AboutUs from './AboutUs';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('AboutUs', () => {
  it('Renders', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );

    expect(screen.getAllByText(/About Us/i)).toBeDefined();
  });
});
