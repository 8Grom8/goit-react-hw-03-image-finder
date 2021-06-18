import React, { Component } from "react";
import css from "./Modal.module.css";
import PropTypes from "prop-types";

class Modal extends Component {
  
  componentDidMount() {
    window.addEventListener("keydown", this.props.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.closeModal);
  }

  render() {
    return (
      <div onClick={this.props.closeModal} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.modalImage} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;