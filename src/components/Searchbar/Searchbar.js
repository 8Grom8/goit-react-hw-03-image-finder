import React, { Component } from "react";
import PropTypes from "prop-types";
import css from './Searchbar.module.css';


class Searchbar extends Component {
  static propTypes = {
    searchImage: PropTypes.func.isRequired,
  };
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchImage(this.state.query);
  };


  render() {
    const { query } = this.state;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={query}
            name="query"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
 
