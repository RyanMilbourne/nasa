import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MarsContext = createContext();

export const MarsProvider = ({ children }) => {
  const [rover, setRover] = useState("Curiosity");

  const [earthDate, setEarthDate] = useState("2021-03-04"); // YYYY-MM-DD
  const [roverData, setRoverData] = useState(null);

  const [dateMenu, setDateMenu] = useState(true);

  const [columns, setColumns] = useState(3);
  const [columnMenu, setColumnMenu] = useState(false);

  const [cameraMenu, setCameraMenu] = useState(false);
  const [camera, setCamera] = useState("NAVCAM");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    const fetchRoverData = async () => {
      setLoading(true);
      setError(null);

      try {
        let allPhotos = [];

        if (camera === null) {
          const cameraList = [
            "NAVCAM",
            "FHAZ",
            "RHAZ",
            "MAST",
            "CHEMCAM",
            "MAHLI",
            "MARDI",
            "PANCAM",
            "MINITES",
          ];

          const responses = await Promise.all(
            cameraList.map((cam) =>
              axios.get(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&camera=${cam}&api_key=${apiKey}`
              )
            )
          );

          responses.forEach((response) => {
            allPhotos = allPhotos.concat(response.data.photos);
          });
        } else {
          const response = await axios.get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&camera=${camera}&api_key=${apiKey}`
          );
          allPhotos = response.data.photos;
        }

        setRoverData(allPhotos);
      } catch (error) {
        console.error("Error Fetching Data: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (earthDate) fetchRoverData();
  }, [rover, camera, earthDate]);

  const handleDateChange = (date) => {
    setEarthDate(date);
  };

  const toggleCameraMenu = () => {
    setCameraMenu((prev) => !prev);
  };

  const toggleColumnMenu = () => {
    setColumnMenu((prev) => !prev);
  };

  const handleCameraChange = (cameraValue) => {
    if (Array.isArray(cameraValue)) {
      setCamera(null);
    } else {
      setCamera(cameraValue);
    }
    setCameraMenu(false);
  };

  const handleColumnChange = (columnValue) => {
    setColumns(columnValue);
    setColumnMenu(false);
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
      currentCamera = "All Cameras";
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
        earthDate,
        dateMenu,
        handleCameraChange,
        handleColumnChange,
        toggleCameraMenu,
        toggleColumnMenu,
        handleDateChange,
      }}
    >
      {children}
    </MarsContext.Provider>
  );
};
