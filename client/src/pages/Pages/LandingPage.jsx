import React, { useState } from "react";
import "../Assets/css/landing.css";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="land-top">
      <div className="land-inner-top">
        <div className={`land-banner-image ${isLoading ? "loading" : ""}`}>
          {isLoading && (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          )}
          <img
            className={`vert-move ${isLoading ? "hidden" : ""}`}
            src="https://raw.githubusercontent.com/AnuragRoshan/images/553c833e30f5c0a7b803ff548835b9e935cefc79/undraw_reading_time_re_phf7.svg"
            alt="reading-girl"
            srcSet=""
            onLoad={handleImageLoad}
          />
        </div>
        <div className="land-banner-slogan">
          <div className="land-banner-slogan-inner">
            <div className="land-logo">bookWise</div>
            <div className="land-motto">Discover, Learn, Grow</div>
            <div className="land-button">
              <a className="landing-button-hover" href="/home">
                <span>GO!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
