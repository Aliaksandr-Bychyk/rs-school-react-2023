import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FormControl from './FormControl';
import React from 'react';

describe('FormControl', () => {
  it('Renders', () => {
    const ref: React.RefObject<HTMLInputElement> = React.createRef();
    render(<FormControl formRef={ref} handleSubmit={() => {}} />);
    expect(screen.getAllByText(/Submit/i)).toBeDefined();
  });
});
