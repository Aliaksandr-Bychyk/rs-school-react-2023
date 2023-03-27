import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FormCard from './FormCard';
import React from 'react';

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: function () {},
});

describe('FormCard', () => {
  const file = new File([''], 'file.png', {
    lastModified: 1675719485006,
    type: 'image/jpeg',
  });

  it('Renders subscribed', () => {
    const obj = {
      name: 'test',
      birthday: '2001-02-02',
      gender: 'male',
      picture: file,
      quote: 'john',
      isSubscribed: true,
    };
    render(<FormCard data={obj} />);
    expect(screen.getAllByText(/his/i)).toBeDefined();
  });
  it('Renders not subscribed', () => {
    const obj = {
      name: 'test',
      birthday: '2001-02-02',
      gender: 'female',
      picture: file,
      quote: 'john',
      isSubscribed: false,
    };
    render(<FormCard data={obj} />);
    expect(screen.getAllByText(/her/i)).toBeDefined();
  });
});
