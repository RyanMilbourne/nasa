import React, { useContext } from "react";
import "./CameraMenuStyles.scss";
import cameraData from "./cameraData";
import { MarsContext } from "../../../context/marsRoverContext";

const CameraMenu = () => {
  const { handleCameraChange } = useContext(MarsContext);
  return (
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
  );
};

export default CameraMenu;
