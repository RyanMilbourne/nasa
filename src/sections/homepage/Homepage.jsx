import "./HomepageStyles.scss";
import { Helmet } from "react-helmet";
import HeroLanding from "./hero_landing/HeroLanding";
import Gallery from "./Gallery/Gallery";
import GalleryFilter from "./Filter/GalleryFilter";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>🟠 + 🤖 + 📸</title>
        <meta
          name="description"
          content="Photos from Mars, taken by Nasa's Curiosity Rover"
        />
      </Helmet>
      <div className="homepage-container">
        <HeroLanding />
        <GalleryFilter />
        <Gallery />
      </div>
    </>
  );
};

export default Homepage;
