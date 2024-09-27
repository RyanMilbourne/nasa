import React, { useContext, useState } from "react";
import "./GalleryFilterStyles.scss";
import { MarsContext } from "../../../context/marsRoverContext";
import cameraData from "./cameraData";

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import ColumnMenu from "./ColumnMenu";
import CameraMenu from "./CameraMenu";

const GalleryFilter = () => {
  const {
    handleCameraChange,
    handleColumnChange,
    currentCamera,
    cameraMenu,
    toggleCameraMenu,
    columnMenu,
    toggleColumnMenu,
  } = useContext(MarsContext);

  const iconStyle = {
    width: "1rem",
    height: "1rem",
  };
  return (
    <div className="filter-container">
      <div className="filter-wrapper">
        <div className="camera-selection-wrapper" onClick={toggleCameraMenu}>
          <div className="icon-wrapper">
            <CameraAltRoundedIcon style={iconStyle} />
          </div>
          <div className="camera-title">{currentCamera}</div>
        </div>
        <div className="column-selection-wrapper" onClick={toggleColumnMenu}>
          <div className="icon-wrapper grid">
            <GridViewRoundedIcon style={iconStyle} />
          </div>
        </div>
      </div>
      {columnMenu && <ColumnMenu />}
      {cameraMenu && <CameraMenu />}
    </div>
  );
};

export default GalleryFilter;
