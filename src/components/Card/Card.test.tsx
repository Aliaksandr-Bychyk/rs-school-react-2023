import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from './Card';
import React from 'react';

describe('Card', () => {
  it('Renders', () => {
    const obj = { id: 1, imageUrl: '', title: 'test', publishedAt: '22-02-2022', newsSite: 'test' };
    render(<Card data={obj} />);
    expect(screen.getAllByText(/test/i)).toBeDefined();
  });
});
