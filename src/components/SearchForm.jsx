import React, { useState } from 'react';
import jsonData from '../data/unique_issues.json';
import SearchResult from './SearchResult';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredSuggestions = jsonData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredSuggestions);

    if (query.trim() === '') {
      setSuggestions([]);
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const clearQuery = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      return;
    }

    const filteredResults = jsonData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
    setShowResults(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='container search'>
      <div className='container search-block'>
        <div class='container searchbox'>
          <div onClick={handleSearch}>
            <svg aria-hidden='true' viewBox='0 0 24 24'>
              <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
            </svg>
          </div>
          <input
            type='search'
            inputmode='search'
            placeholder='Search in titles...'
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            list='suggestions'
          />
        </div>
        <datalist id='suggestions'>
          {suggestions.map((item) => (
            <option key={item.id} value={item.title} />
          ))}
        </datalist>
      </div>
      <div className='container search-results'>
        {showResults &&
          searchResults.map((item) => (
            <SearchResult
              key={item.id}
              item={item}
              series={item.series}
              clearQuery={clearQuery}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchForm;
