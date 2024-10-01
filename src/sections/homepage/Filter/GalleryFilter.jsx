import React, { useState, useEffect } from "react";
import "./GalleryFilterStyles.scss";

import FilterDesktop from "./FilterDesktop";
import FilterMobile from "./FilterMobile";

const GalleryFilter = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="filter-container">
      {!isMobile && <FilterDesktop />}
      {isMobile && <FilterMobile />}
    </div>
  );
};

export default GalleryFilter;
