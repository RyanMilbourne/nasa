import { useState, useEffect } from "react";

const useProgressiveImage = (lowQualitySrc, highQualitySrc) => {
  const [src, setSrc] = useState(lowQualitySrc);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
      setIsLoaded(true);
    };
  }, [highQualitySrc]);

  return [src, isLoaded];
};

export default useProgressiveImage;
