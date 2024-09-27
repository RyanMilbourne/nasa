import React, { useContext } from "react";
import "./GalleryStyles.scss";
import GalleryItem from "./GalleryItem";
import { MarsContext } from "../../../context/marsRoverContext";

const Gallery = () => {
  const {
    roverData,
    loading,
    error,
    camera,
    handleCameraChange,
    columns,
    handleColumnChange,
  } = useContext(MarsContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!roverData || roverData.length === 0) {
    return <p>No photos available for provided date</p>;
  }

  const columnStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <div className="gallery-container">
      <div className="gallery-wrapper" style={columnStyle}>
        {roverData.map((photo) => (
          <GalleryItem
            key={photo.id}
            src={photo.img_src}
            alt={`Mars rover photo from ${photo.earth_date}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
