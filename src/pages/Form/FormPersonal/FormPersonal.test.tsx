import { render, renderHook, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FormPersonal from './FormPersonal';
import React from 'react';
import { useForm } from 'react-hook-form';
import IFormCardData from 'interfaces/IFormCardData';

describe('FormControl', () => {
  const { result } = renderHook(() => useForm<IFormCardData>());
  it('Renders valid', () => {
    render(
      <FormPersonal formRef={result.current.register} formError={result.current.formState.errors} />
    );
    expect(screen.getAllByText(/Name:/i)).toBeDefined();
  });
});
