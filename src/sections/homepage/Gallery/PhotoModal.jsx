import React from "react";
import "./PhotoModalStyles.scss";

const PhotoModal = ({
  src,
  alt,
  toggleModal,
  earthDate,
  sol,
  camera,
  cameraShort,
}) => {
  const openInTab = () => {
    window.open(src, "_blank");
  };
  return (
    <div className="modal-container" onClick={toggleModal}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <img className="modal-hero" src={src} alt={alt} onClick={openInTab} />
        <div className="modal-description-container">
          <div className="modal-description-wrapper">
            <div className="modal-description">{camera}</div>
            <div className="modal-description">-</div>
            <div className="modal-description">"{cameraShort}"</div>
          </div>
          <div className="modal-description-wrapper">
            <div className="modal-description">sol:{sol}</div>
            <div className="modal-description">/</div>
            <div className="modal-description">{earthDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
