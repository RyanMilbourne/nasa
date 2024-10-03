import React, { useContext } from "react";

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

import ColumnMenu from "./ColumnMenu";
import CameraMenu from "./CameraMenu";
import DateMenu from "./DateMenu";

import { MarsContext } from "../../../context/marsRoverContext";

const FilterDesktop = () => {
  const {
    currentCamera,
    cameraMenu,
    toggleCameraMenu,
    columnMenu,
    toggleColumnMenu,
    earthDate,
    viewDesktopDateMenu,
    toggleDesktopDateMenu,
  } = useContext(MarsContext);

  const iconStyle = {
    width: "1rem",
    height: "1rem",
  };
  return (
    <>
      <div className="filter-wrapper">
        <div className="date-selection-wrapper" onClick={toggleDesktopDateMenu}>
          <div className="icon-wrapper">
            <CalendarMonthRoundedIcon style={iconStyle} />
          </div>
          {earthDate}
        </div>
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
      {cameraMenu && <CameraMenu />}
      {columnMenu && <ColumnMenu />}
      {viewDesktopDateMenu && (
        <div className="desktop-date-container">
          <DateMenu />
        </div>
      )}
    </>
  );
};

export default FilterDesktop;
