import React from 'react';
import './Hero.styles.scss';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__heading-container">
        <div className="heading-primary">
          <div className="heading-primary--main">
            streetwise
          </div>
          <div className="heading-primary--sub">
            live, lift, and code
          </div>
          <a href="#" className="btn btn--white btn--animated">Learn more</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
