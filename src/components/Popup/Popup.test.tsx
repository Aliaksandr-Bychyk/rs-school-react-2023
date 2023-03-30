import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Popup from './Popup';
import React from 'react';

describe('Popup', () => {
  it('Renders success', () => {
    render(<Popup isSuccessful={true} />);
    expect(screen.getAllByText(/Success!/i)).toBeDefined();
  });
  it('Renders fail', () => {
    render(<Popup isSuccessful={false} />);
    expect(screen.getAllByText(/Fail!/i)).toBeDefined();
  });
});
