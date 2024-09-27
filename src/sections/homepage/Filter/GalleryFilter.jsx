import React, { useContext } from "react";
import "./GalleryFilterStyles.scss";
import { MarsContext } from "../../../context/marsRoverContext";
import cameraData from "./cameraData";

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

const GalleryFilter = () => {
  const {
    handleCameraChange,
    handleColumnChange,
    currentCamera,
    menu,
    toggleMenu,
  } = useContext(MarsContext);

  const iconStyle = {
    width: "1rem",
    height: "1rem",
  };
  return (
    <div className="filter-container">
      <div className="filter-wrapper">
        <div className="camera-selection-wrapper" onClick={toggleMenu}>
          <div className="icon-wrapper">
            <CameraAltRoundedIcon style={iconStyle} />
          </div>
          <div className="camera-title">{currentCamera}</div>
        </div>
        <div className="column-section-wrapper">
          <div className="icon-wrapper grid">
            <GridViewRoundedIcon style={iconStyle} />
          </div>
        </div>
      </div>
      {menu && (
        <div className="camera-menu-container">
          <div className="camera-menu-wrapper">
            {cameraData.map((camera, index) => (
              <div
                className="camera-item"
                key={index}
                onClick={() => handleCameraChange(camera.value)}
              >
                {camera.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryFilter;
