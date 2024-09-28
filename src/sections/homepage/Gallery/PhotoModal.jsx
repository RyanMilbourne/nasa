import React from "react";
import "./PhotoModalStyles.scss";

const PhotoModal = ({ src, alt, toggleModal }) => {
  const openInTab = () => {
    window.open(src, "_blank");
  };
  return (
    <div className="modal-container" onClick={toggleModal}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <img className="modal-hero" src={src} alt={alt} onClick={openInTab} />
      </div>
    </div>
  );
};

export default PhotoModal;
