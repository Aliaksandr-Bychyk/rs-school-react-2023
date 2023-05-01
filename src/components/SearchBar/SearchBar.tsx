import React, { FC, useState } from 'react';
import './SearchBar.css';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/searchTextSlice';

interface ISearchBarProps {
  formRef: UseFormRegister<{ 'search-bar': string }>;
  handleOnSumbit: () => void;
  setValue: UseFormSetValue<{ 'search-bar': string }>;
}

const SearchBar: FC<ISearchBarProps> = ({ formRef, handleOnSumbit, setValue }) => {
  const searchText = useSelector((state: RootState) => state['search-text'].value);
  const dispatch = useDispatch();

  const [searchBarValue, setSearchBarValue] = useState<string>(searchText);

  const handleChange = (value: string): void => {
    setSearchBarValue(value);
    setValue('search-bar', value);
    dispatch(setSearchValue(value));
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
