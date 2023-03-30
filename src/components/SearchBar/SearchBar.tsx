import React, { FC, useEffect, useState } from 'react';
import './SearchBar.css';

const SearchBar: FC = () => {
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
  };

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="search"
        placeholder="Type your request here..."
        value={searchBarValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <input className="search-bar-button" type="button" value="SEARCH" />
    </div>
  );
};

export default SearchBar;
