import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(query.trim());
    setQuery('');
  };

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <header className='Searchbar'>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
          name="query"
          className="SearchForm-input"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
