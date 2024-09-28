import React, { useState } from "react";
import PhotoModal from "./PhotoModal";

const GalleryItem = ({ src, alt, earthDate, sol, camera, cameraShort }) => {
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
      {modal && (
        <PhotoModal
          src={src}
          alt={alt}
          earthDate={earthDate}
          sol={sol}
          camera={camera}
          cameraShort={cameraShort}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default GalleryItem;
