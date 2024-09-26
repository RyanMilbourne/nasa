import { Helmet } from "react-helmet";
import "./ContactStyles.scss";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Title</title>
        <meta name="description" content="Contact Description" />
      </Helmet>
      <div className="contact-container">
        <p>Contact Page</p>
      </div>
    </>
  );
};

export default Contact;
