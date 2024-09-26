import { useContext } from "react";
import "./HomepageStyles.scss";
import { Helmet } from "react-helmet";
import { MarsContext } from "../../context/marsRoverContext";

const Homepage = () => {
  const { roverData, loading, error } = useContext(MarsContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!roverData || roverData.length === 0) {
    return <p>No photos available for provided date</p>;
  }

  return (
    <>
      <Helmet>
        <title>Homepage Title</title>
        <meta name="description" content="Homepage Description" />
      </Helmet>
      <div className="homepage-container">
        {roverData.map((photo) => (
          <img
            key={photo.id}
            src={photo.img_src}
            alt={`Mars rover photo from ${photo.earth_date}`}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
