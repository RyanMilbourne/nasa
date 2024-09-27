import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MarsContext = createContext();

export const MarsProvider = ({ children }) => {
  const [rover, setRover] = useState("Curiosity");
  const [camera, setCamera] = useState("NAVCAM");
  const [earthDate, setEarthDate] = useState("2015-12-25"); // YYYY-MM-DD
  const [roverData, setRoverData] = useState(null);
  const [columns, setColumns] = useState(3);
  const [columnMenu, setColumnMenu] = useState(false);
  const [cameraMenu, setCameraMenu] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    const fetchRoverData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&camera=${camera}&api_key=${apiKey}`
        );
        setRoverData(response.data.photos);
      } catch (error) {
        console.error("Error Fetching Data: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (earthDate) fetchRoverData();
  }, [rover, camera, earthDate]);

  const toggleCameraMenu = () => {
    setCameraMenu((prev) => !prev);
  };

  const toggleColumnMenu = () => {
    setColumnMenu((prev) => !prev);
  };

  const handleCameraChange = (cameraValue) => {
    setCamera(cameraValue);
    setCameraMenu(false);
  };

  const handleColumnChange = (columnValue) => {
    setColumns(columnValue);
  };

  let currentCamera = "";

  switch (camera) {
    case "FHAZ":
      currentCamera = "Front Hazard Avoidance Camera";
      break;
    case "RHAZ":
      currentCamera = "Rear Hazard Avoidance Camera";
      break;
    case "MAST":
      currentCamera = "Mast Camera";
      break;
    case "CHEMCAM":
      currentCamera = "Chemistry and Camera Complex";
      break;
    case "MAHLI":
      currentCamera = "Mars Hand Lens Imager";
      break;
    case "MARDI":
      currentCamera = "Mars Descent Imager";
      break;
    case "NAVCAM":
      currentCamera = "Navigation Camera";
      break;
    case "PANCAM":
      currentCamera = "Panaramic Camera";
      break;
    case "MINITES":
      currentCamera = "Miniature Thermal Emission Spectrometer";
      break;
    default:
      currentCamera = "No Camera";
      break;
  }

  return (
    <MarsContext.Provider
      value={{
        rover,
        camera,
        earthDate,
        roverData,
        loading,
        error,
        columns,
        currentCamera,
        cameraMenu,
        columnMenu,
        handleCameraChange,
        handleColumnChange,
        toggleCameraMenu,
        toggleColumnMenu,
      }}
    >
      {children}
    </MarsContext.Provider>
  );
};
