import { Helmet } from "react-helmet";
import "./AboutStyles.scss";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Title</title>
        <meta name="description" content="About Description" />
      </Helmet>
      <div className="about-container">
        <p>About Page</p>
      </div>
    </>
  );
};

export default About;
