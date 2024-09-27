import React from "react";
import "./LoadingStyles.scss";

import RotateRightRoundedIcon from "@mui/icons-material/RotateRightRounded";

const Loading = () => {
  const iconStyle = {
    width: "4rem",
    height: "4rem",
  };
  return (
    <div className="loading-container">
      <div className="loading-wrapper">
        <div className="loading-icon">
          <RotateRightRoundedIcon style={iconStyle} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
