import React, { useContext } from "react";
import "./GalleryStyles.scss";
import GalleryItem from "./GalleryItem";
import { MarsContext } from "../../../context/marsRoverContext";
import Loading from "./Loading";
import NoPhotos from "./NoPhotos";

const Gallery = () => {
  const { roverData, loading, error, columns, camera } =
    useContext(MarsContext);

  const columnStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <div className="gallery-container">
      {loading && <Loading />}
      {!loading && !error && (!roverData || roverData.length === 0) && (
        <NoPhotos camera={camera} />
      )}
      {error && <p>Error: {error}</p>}
      {!loading && !error && roverData && roverData.length > 0 && (
        <div className="gallery-wrapper" style={columnStyle}>
          {roverData.map((photo) => (
            <GalleryItem
              key={photo.id}
              src={photo.img_src}
              earthDate={photo.earth_date}
              sol={photo.sol}
              camera={photo.camera.full_name}
              cameraShort={photo.camera.name}
              alt={`Mars rover photo from ${photo.earth_date}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
