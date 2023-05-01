import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SearcBar from './SearchBar';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Provider } from 'react-redux';
import { createStore } from '../../redux/store';

const store = createStore();

describe('SearchBar', () => {
  const { result } = renderHook(() => useForm<{ 'search-bar': string }>());
  const { register, handleSubmit, setValue } = result.current;
  it('Renders', () => {
    render(
      <Provider store={store}>
        <SearcBar formRef={register} handleOnSumbit={handleSubmit(() => {})} setValue={setValue} />
      </Provider>
    );
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});
