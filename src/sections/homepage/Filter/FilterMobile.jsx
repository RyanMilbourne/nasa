import React, { useContext, useState } from "react";

import "./FilterMobileStyles.scss";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

import CameraMenu from "./CameraMenu";

import { MarsContext } from "../../../context/marsRoverContext";
import DateMenuMobile from "./MobileDateMenu";

const FilterMobile = () => {
  const [viewDateMenu, setViewDateMenu] = useState(false);

  const { currentCamera, cameraMenu, toggleCameraMenu, earthDate } =
    useContext(MarsContext);

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
    </div>
  );
};

export default FilterMobile;
