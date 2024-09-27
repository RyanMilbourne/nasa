import { useContext } from "react";
import "./HomepageStyles.scss";
import { Helmet } from "react-helmet";
import { MarsContext } from "../../context/marsRoverContext";
import HeroLanding from "./hero_landing/HeroLanding";
import Gallery from "./Gallery/Gallery";
import GalleryFilter from "./Gallery/GalleryFilter";

const Homepage = () => {
  const { roverData, loading, error, camera, handleCameraChange } =
    useContext(MarsContext);

  return (
    <>
      <Helmet>
        <title>Homepage Title</title>
        <meta name="description" content="Homepage Description" />
      </Helmet>
      <div className="homepage-container">
        <HeroLanding />
        {/* <GalleryFilter /> */}
        <Gallery />
      </div>
    </>
  );
};

export default Homepage;
