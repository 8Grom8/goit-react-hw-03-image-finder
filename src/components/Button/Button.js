import React from "react";
import css from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ showMore }) => {
  return (
      <button className={css.Button} onClick={showMore}>
        Show More
      </button>
      );
};

Button.propTypes = {
  showMore: PropTypes.func.isRequired,
};

export default Button;
