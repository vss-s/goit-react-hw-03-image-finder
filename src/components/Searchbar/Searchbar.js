import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Searchbar.module.css';

const Searchbar = ({ searchValue, handleChange, handleSubmit }) => (
  <header className={Styles.Searchbar}>
    <form onSubmit={handleSubmit} className={Styles.SearchForm}>
      <button type="submit" className={Styles.SearchFormButton}>
        <span className={Styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        onChange={handleChange}
        className={Styles.SearchFormInput}
        value={searchValue}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  searchValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
};

export default Searchbar;
