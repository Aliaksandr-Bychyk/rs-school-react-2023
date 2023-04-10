import React, { FC, useEffect, useState } from 'react';
import './SearchBar.css';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface ISearchBarProps {
  formRef: UseFormRegister<{ 'search-bar': string }>;
  handleOnSumbit: () => void;
  setValue: UseFormSetValue<{ 'search-bar': string }>;
}

const SearchBar: FC<ISearchBarProps> = ({ formRef, handleOnSumbit, setValue }) => {
  const [searchBarValue, setSearchBarValue] = useState<string>(
    (window.localStorage.getItem('search-value') as string) ?? ''
  );

  useEffect(() => {
    return () => {
      window.localStorage.setItem('search-value', searchBarValue as string);
    };
  }, [searchBarValue]);

  const handleChange = (value: string): void => {
    setSearchBarValue(value);
    setValue('search-bar', value);
  };

  const suggestions = ['Space', 'Mars', 'Nasa'];

  return (
    <form className="search-container" onSubmit={handleOnSumbit}>
      <div className="search-controls">
        <input
          className="search-bar"
          type="search"
          placeholder="Type your request here..."
          value={searchBarValue}
          {...formRef('search-bar', {
            onChange: (e) => handleChange(e.target.value),
          })}
        />
        <input className="search-bar-button" type="submit" value="SEARCH" />
      </div>
      <div className="search-suggestions">
        {suggestions.map((el, index) => (
          <input
            key={index}
            className="search-suggestion"
            type="button"
            value={el}
            onClick={(e) => {
              handleChange((e.target as HTMLInputElement).value);
            }}
          />
        ))}
      </div>
    </form>
  );
};

export default SearchBar;
