import React, { useContext, useState } from "react";

import "./FilterMobileStyles.scss";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

import CameraMenu from "./CameraMenu";

import { MarsContext } from "../../../context/marsRoverContext";
import DateMenuMobile from "./MobileDateMenu";
import ColumnMenuMobile from "./ColumnMobileMenu";

const FilterMobile = () => {
  const [viewDateMenu, setViewDateMenu] = useState(false);

  const {
    currentCamera,
    cameraMenu,
    toggleCameraMenu,
    earthDate,
    handleColumnChange,
  } = useContext(MarsContext);

  const toggleDateMenu = () => {
    setViewDateMenu((prev) => !prev);
  };

  return (
    <div className="mobile-filter-container">
      <div className="mobile-filter-wrapper" onClick={toggleDateMenu}>
        <div className="mobile-filter-header">
          <CalendarMonthRoundedIcon />
          {earthDate}
        </div>
        {viewDateMenu && (
          <div className="mobile-filter-body">
            <DateMenuMobile toggleDateMenu={toggleDateMenu} />
          </div>
        )}
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
      <div className="mobile-filter-wrapper">
        <div className="mobile-filter-header">
          <GridViewRoundedIcon />
          <div className="mobile-filter-columns-wrapper">
            <ColumnMenuMobile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMobile;
