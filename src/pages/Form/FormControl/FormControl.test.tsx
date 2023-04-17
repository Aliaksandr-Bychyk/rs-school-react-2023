import { render, renderHook, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FormControl from './FormControl';
import React from 'react';
import { useForm } from 'react-hook-form';
import IFormCardData from 'interfaces/IFormCardData';

describe('FormControl', () => {
  it('Renders', () => {
    const { result } = renderHook(() => useForm<IFormCardData>());
    render(<FormControl formRef={result.current.register} />);
    expect(screen.getAllByText(/Submit/i)).toBeDefined();
  });
});
