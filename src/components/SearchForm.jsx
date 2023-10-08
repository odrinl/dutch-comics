import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className='container title'>
      <h2>Search by any part of full title (series + issue)</h2>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={query}
          onChange={handleInputChange}
          aria-label='Search'
        />
        <button type='submit' aria-label='Search Button'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
