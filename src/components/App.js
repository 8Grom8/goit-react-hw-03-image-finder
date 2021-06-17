import React, { Component } from "react";
import axios from "axios";
import css from "./App.module.css"
import Searchbar from "../components/Searchbar/Searchbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Loader from "../components/Loader/Loader";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";


class App extends Component {
  state = {
    hits: [],
    error: null,
    loading: false,
    query: "",
    page: 1,
    // endPage: 1,
    // selected: null,
    isModalOpen: false,
    BASE_URL: "https://pixabay.com/api",
    API_KEY: "21693185-7bffd421bcba5faf5a7443ece",
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.handleSearchImage();
    }
  }
  openModal = (modalImage) => {
    this.setState({ isModalOpen: true, modalImage });
  };

  closeModal = (e) => {
    if (e.target === e.currentTarget || e.key === "Escape")
      this.setState({ isModalOpen: false });
  };
  handleSearchImage = async () => {
    const { page, query, BASE_URL, API_KEY } = this.state;
    this.setState({ loading: true, error: null });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
      );
      this.setState((prevState) => ({
        hits: [...prevState.hits, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.response.hits });
    } finally {
      this.setState({ loading: false });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };
  handleSubmit = (query) => {
    this.setState({  query, hits: [], page: 1 });
  };

  showMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };
  getSnapshotBeforeUpdate;

  render() {
    const { hits, loading, isModalOpen, modalImage } = this.state;
    return (
      <div className={css.App}>
        <Searchbar searchImage={this.handleSubmit} />
        {loading && <Loader />}
        <ImageGallery hits={hits} openModal={this.openModal} />
        {!!hits.length && <Button showMore={this.showMore} />}
        {isModalOpen && (
          <Modal modalImage={modalImage} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
