import React from "react";
import "./HeroLandingStyles.scss";
import CuriosityTitle from "../../../assets/CuriosityTitle";

const HeroLanding = () => {
  return (
    <div className="hero-landing-container">
      <div className="hero-landing-wrapper">
        {/* <div className="hero-title-wrapper">greetings, earthling</div> */}
      </div>
      <div className="hero-landing-title-container">
        <CuriosityTitle />
      </div>
      <div className="hero-landing-graphic" />
      <div className="hero-landing-dust" />
    </div>
  );
};

export default HeroLanding;
