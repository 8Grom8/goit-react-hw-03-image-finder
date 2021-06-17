import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ hits, openModal }) => {
    return (
    <ul className={css.ImageGallery}>
      {hits.map((item) => (
        <ImageGalleryItem
          item={item}
          key={item.id}
          modalImage={item.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;