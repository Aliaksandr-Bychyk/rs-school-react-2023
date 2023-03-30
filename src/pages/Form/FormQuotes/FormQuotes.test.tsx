import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FormQuotes from './FormQuotes';
import React from 'react';

describe('FormQuotes', () => {
  const formRef: React.RefObject<HTMLSelectElement> = React.createRef();
  it('Renders', () => {
    render(<FormQuotes formRef={formRef} />);
    expect(screen.getAllByText(/Favorite quote:/i)).toBeDefined();
  });
});
