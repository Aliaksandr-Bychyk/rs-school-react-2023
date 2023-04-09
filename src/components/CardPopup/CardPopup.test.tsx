import { cleanup, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CardPopup from './CardPopup';
import React, { useState } from 'react';
import ICardData from '../../interfaces/ICardData';

const { result } = renderHook(() => useState<boolean>(true));
const [showCardPopup, setShowCardPopup] = result.current;
const obj: ICardData = {
  id: 1,
  imageUrl: 'http://localhost:3000/img.png',
  title: 'test',
  publishedAt: '22-02-2022',
  newsSite: 'test',
  url: '/',
  summary: 'Test summary',
  updatedAt: '22-02-2022',
  featured: false,
  launches: [],
  events: [],
};

afterEach(cleanup);

describe('CardPopup', () => {
  test('overlay click', () => {
    const { container } = render(<CardPopup data={obj} setShowCardPopup={setShowCardPopup} />);
    fireEvent.click(container.querySelector('.overlay') as Element);
    expect(showCardPopup).toBeTruthy();
  });
  test('cardpopup content click', () => {
    const { container } = render(<CardPopup data={obj} setShowCardPopup={setShowCardPopup} />);
    fireEvent.click(container.querySelector('.card-popup-content') as Element);
    expect(showCardPopup).toBeTruthy();
  });
  test('renders img correctly', () => {
    const { container } = render(<CardPopup data={obj} setShowCardPopup={setShowCardPopup} />);
    const imgElement = container.querySelector('.card-image') as HTMLImageElement;
    expect(imgElement.src).toEqual(obj.imageUrl);
  });
  test('renders img error', () => {
    const { container } = render(<CardPopup data={obj} setShowCardPopup={setShowCardPopup} />);
    const imgElement = container.querySelector('.card-image') as HTMLImageElement;
    fireEvent.error(imgElement);
    expect(imgElement.src).toEqual(
      'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'
    );
  });
});
