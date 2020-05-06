import React from 'react';
import Loader from 'react-loader-spinner';
import Styles from './ReactLoader.module.css';

const ReactLoader = () => (
  <div className={Styles.loaderWrapper}>
    <Loader type="ThreeDots" color="#ff5588" height={150} width={150} />
  </div>
);

export default ReactLoader;
