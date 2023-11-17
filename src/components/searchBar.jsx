import React from 'react';
import { Search } from 'react-feather';
import '../styles/fonts.css';
import '../styles/searchbar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="...Search/بحث"
      />
      <Search className="search-icon" />
    </div>
  );
};

export default SearchBar;
