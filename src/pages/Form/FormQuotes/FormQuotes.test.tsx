import React from 'react';
import { useForm } from 'react-hook-form';
import { render, renderHook, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FormQuotes from './FormQuotes';
import IFormCardData from 'interfaces/IFormCardData';

describe('FormQuotes', () => {
  it('Renders', () => {
    const { result } = renderHook(() => useForm<IFormCardData>());
    render(<FormQuotes formRef={result.current.register} />);
    expect(screen.getAllByText(/Favorite quote:/i)).toBeDefined();
  });
});
