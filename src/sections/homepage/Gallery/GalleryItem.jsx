import React, { useState } from "react";
import PhotoModal from "./PhotoModal";

const GalleryItem = ({ src, alt }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      <img
        className="gallery-image"
        src={src}
        alt={alt}
        onClick={toggleModal}
      />
      {modal && <PhotoModal src={src} toggleModal={toggleModal} />}
    </>
  );
};

export default GalleryItem;
