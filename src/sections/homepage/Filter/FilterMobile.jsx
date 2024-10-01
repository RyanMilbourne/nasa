import React, { useContext, useEffect } from "react";

import "./FilterMobileStyles.scss";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

import ColumnMenu from "./ColumnMenu";
import CameraMenu from "./CameraMenu";
import DateMenu from "./DateMenu";

import { MarsContext } from "../../../context/marsRoverContext";

const FilterMobile = () => {
  const {
    currentCamera,
    cameraMenu,
    toggleCameraMenu,
    columnMenu,
    toggleColumnMenu,
  } = useContext(MarsContext);

  useEffect(() => {
    console.log("cameraMenu state:", cameraMenu);
  }, [cameraMenu]);

  return (
    <div className="mobile-filter-container">
      <div className="mobile-filter-wrapper">
        <div className="mobile-filter-header">
          <CalendarMonthRoundedIcon />
          <DateMenu />
        </div>
      </div>
      <div className="mobile-filter-wrapper" onClick={toggleCameraMenu}>
        <div className="mobile-filter-header">
          <CameraAltRoundedIcon />
          {currentCamera}
        </div>
        {cameraMenu && (
          <div className="mobile-filter-body">
            <CameraMenu />
          </div>
        )}
      </div>
      <div className="mobile-filter-wrapper" onClick={toggleColumnMenu}>
        <GridViewRoundedIcon />
      </div>
      {columnMenu && <ColumnMenu />}
    </div>
  );
};

export default FilterMobile;
