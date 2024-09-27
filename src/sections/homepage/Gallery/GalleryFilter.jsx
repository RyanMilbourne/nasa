import React, { useContext } from "react";
import "./GalleryStyles.scss";
import { MarsContext } from "../../../context/marsRoverContext";

const GalleryFilter = () => {
  const { handleCameraFilter } = useContext(MarsContext);
  return (
    <div className="filter-container">
      <div className="filter-wrapper">filter</div>
    </div>
  );
};

export default GalleryFilter;
