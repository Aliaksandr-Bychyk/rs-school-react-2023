import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FormCard from './FormCard';
import React from 'react';

describe('FormCard', () => {
  it('Renders subscribed', () => {
    const obj = {
      name: 'test',
      birthday: '2001-02-02',
      gender: 'male',
      picture: 'test.png',
      quote: 'john',
      isSubscribed: true,
    };
    render(<FormCard data={obj} />);
    expect(screen.getAllByText(/test/i)).toBeDefined();
  });
  it('Renders not subscribed', () => {
    const obj = {
      name: 'test',
      birthday: '2001-02-02',
      gender: 'male',
      picture: 'test.png',
      quote: 'john',
      isSubscribed: false,
    };
    render(<FormCard data={obj} />);
    expect(screen.getAllByText(/test/i)).toBeDefined();
  });
});
