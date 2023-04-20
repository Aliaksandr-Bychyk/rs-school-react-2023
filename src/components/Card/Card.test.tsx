import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from './Card';
import React from 'react';
import ICardData from '../../interfaces/ICardData';

describe('Card', () => {
  it('Renders', () => {
    const obj: ICardData = {
      id: 1,
      imageUrl: '',
      title: 'test',
      publishedAt: '22-02-2022',
      newsSite: 'test',
    };
    render(<Card data={obj} onClick={() => {}} />);
    expect(screen.getAllByText(/test/i)).toBeDefined();
  });
});
