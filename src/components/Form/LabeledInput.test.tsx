import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LabeledInput from './LabeledInput';
import React from 'react';

describe('LabeledInput', () => {
  it('Renders', () => {
    render(<LabeledInput label="test" params={{ type: 'text' }} />);
    expect(screen.getAllByText(/test/i)).toBeDefined();
  });
  it('Renders reversed', () => {
    render(<LabeledInput label="test" params={{ type: 'text' }} isReversed={true} />);
    expect(screen.getAllByText(/test/i)).toBeDefined();
  });
});
