import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imagesArr, onOpenModalClick }) => (
  <>
    {imagesArr.map(({ id, webformatURL, tags }) => (
      <li
        onClick={() => onOpenModalClick(id)}
        key={id}
        className={Styles.ImageGalleryItem}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={Styles.ImageGalleryItemImage}
        />
      </li>
    ))}
  </>
);

ImageGalleryItem.propTypes = {
  imagesArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    }).isRequired,
  ),
  onOpenModalClick: PropTypes.func,
};

export default ImageGalleryItem;
