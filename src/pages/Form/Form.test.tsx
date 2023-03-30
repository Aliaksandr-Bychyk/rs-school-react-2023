import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Form from './Form';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('Form', () => {
  it('Renders', () => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );
    expect(screen.getAllByText(/Form/i)).toBeDefined();
  });
});
