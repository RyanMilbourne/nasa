import React, { useContext } from "react";
import "./GalleryStyles.scss";
import GalleryItem from "./GalleryItem";
import { MarsContext } from "../../../context/marsRoverContext";
import Loading from "./Loading";

const Gallery = () => {
  const { roverData, loading, error, columns } = useContext(MarsContext);

  const columnStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <div className="gallery-container">
      {loading && <Loading />}
      <div className="gallery-wrapper" style={columnStyle}>
        {error && <p>Error: {error}</p>}
        {!loading && !error && (!roverData || roverData.length === 0) && (
          <p>No photos available for provided date</p>
        )}
        {!loading &&
          !error &&
          roverData &&
          roverData.length > 0 &&
          roverData.map((photo) => (
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
