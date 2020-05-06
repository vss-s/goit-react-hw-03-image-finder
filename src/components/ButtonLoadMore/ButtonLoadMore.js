import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ButtonLoadMore.module.css';

const ButtonLoadMore = ({ btnAction }) => (
  <button onClick={btnAction} type="button" className={Styles.Button}>
    Load More
  </button>
);

ButtonLoadMore.propType = {
  btnAction: PropTypes.func,
};

export default ButtonLoadMore;
