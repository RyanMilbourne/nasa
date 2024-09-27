import React from "react";
import "./NoPhotosStyles.scss";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";

const NoPhotos = ({ camera }) => {
  const iconStyle = {
    width: "4rem",
    height: "4rem",
  };
  return (
    <div className="no-photos-container">
      <div className="no-photos-wrapper">
        <div className="no-photos-icon">
          <SmartToyRoundedIcon style={iconStyle} />
        </div>
        No photos from the "{camera}" camera <br></br> available for provided
        date
      </div>
    </div>
  );
};

export default NoPhotos;
