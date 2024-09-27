import React, { useContext } from "react";
import "./GalleryStyles.scss";
import GalleryItem from "./GalleryItem";
import { MarsContext } from "../../../context/marsRoverContext";
import GalleryFilter from "./GalleryFilter";

const Gallery = () => {
  const { roverData, loading, error, camera, handleCameraChange } =
    useContext(MarsContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!roverData || roverData.length === 0) {
    return <p>No photos available for provided date</p>;
  }
  return (
    <div className="gallery-container">
      <GalleryFilter />
      <div className="gallery-wrapper">
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
