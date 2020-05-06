import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onOpenModal }) => (
  <ul className={Styles.ImageGallery}>
    <ImageGalleryItem imagesArr={images} onOpenModalClick={onOpenModal} />
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func,
};

export default ImageGallery;
