import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Router from './Router';
import React from 'react';

describe('Router', () => {
  it('Renders', () => {
    render(<Router />);
    expect(screen.getAllByText(/MAIN/i)).toBeDefined();
  });
});
