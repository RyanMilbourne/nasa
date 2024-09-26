import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MarsContext = createContext();

export const MarsProvider = ({ children }) => {
  const [rover, setRover] = useState("Curiosity");
  const [camera, setCamera] = useState("MAST");
  const [earthDate, setEarthDate] = useState("2015-12-25"); // YYYY-MM-DD
  const [roverData, setRoverData] = useState(null);

  /* 
  Cameras:
  FHAZ (Front Hazard Avoidance Camera)
  RHAZ (Rear Hazard Avoidance Camera)
  MAST (Mast Camera)
  CHEMCAM (Chemistry and Camera Complex)
  MAHLI (Mars Hand Lens Imager)
  MARDI (Mars Descent Imager)
  NAVCAM (Navigation Camera)
  PANCAM (Panoramic Camera)
  MINITES (Miniature Thermal Emission Spectrometer)
  */

  const apiKey = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    const fetchRoverData = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&api_key=${apiKey}`
        );
        setRoverData(response.photos);
      } catch (error) {
        console.error("Error Fetching Data: ", error);
      }
    };

    if (earthDate) fetchRoverData();
  }, [rover, earthDate]);

  return (
    <MarsContext.Provider
      value={{
        rover,
        camera,
        earthDate,
        roverData,
      }}
    >
      {children}
    </MarsContext.Provider>
  );
};
