import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { responceApi } from './services/responceApi';
import ReactLoader from './components/ReactLoader/ReactLoader';
import ButtonLoadMore from './components/ButtonLoadMore/ButtonLoadMore';
import ModalWindow from './components/ModalWindow/ModalWindow';

export default class App extends Component {
  state = {
    currentImages: [],
    currentPage: 1,
    curentSearchQuery: '',
    isLoading: false,
    isOpenModal: false,
    modalImg: '',
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      curentSearchQuery: value,
    });
  };

  reset() {
    this.setState({
      currentImages: [],
      currentPage: 1,
    });
  }

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  openModal = id => {
    const { currentImages } = this.state;

    const handleOpenImg = currentImages.find(item => item.id === id);
    this.setState({
      isOpenModal: true,
      modalImg: handleOpenImg.largeImageURL,
    });
  };

  loadImages = async () => {
    const { currentPage, curentSearchQuery } = this.state;

    this.setState(prev => ({ isLoading: !prev.isLoading }));

    const responce = await responceApi(curentSearchQuery, currentPage);
    const { hits } = responce.data;
    const hitsWithCastomId = hits.map(item => ({ ...item, id: uuidv4() }));

    this.setState(prev => ({
      currentImages: [...prev.currentImages, ...hitsWithCastomId],
      currentPage: (prev.currentPage += 1),
      isLoading: false,
    }));
  };

  handleLoadMore = async () => {
    await this.loadImages();

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  handleMakeNewResponce = e => {
    e.preventDefault();
    this.reset();
    this.loadImages();
  };

  render() {
    const {
      currentImages,
      curentSearchQuery,
      isLoading,
      isOpenModal,
      modalImg,
    } = this.state;
    return (
      <>
        <Searchbar
          searchValue={curentSearchQuery}
          handleChange={this.handleChange}
          handleSubmit={this.handleMakeNewResponce}
        />
        <main className="mainWrapper">
          {currentImages.length > 0 && (
            <ImageGallery
              onOpenModal={this.openModal}
              images={currentImages}
              handleLoadMore={this.loadImages}
            />
          )}

          {isOpenModal && (
            <ModalWindow openImg={modalImg} onClose={this.closeModal} />
          )}

          {isLoading ? (
            <ReactLoader />
          ) : (
            currentImages.length !== 0 && (
              <ButtonLoadMore btnAction={this.handleLoadMore} />
            )
          )}
        </main>
      </>
    );
  }
}
