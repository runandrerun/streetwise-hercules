import React from 'react';
import MiniGallery from '../mini-gallery/MiniGallery.component';
import './AboutCard.styles.scss';

const AboutCard = () => {
  return (
    <section className="about-section">
      <div className="center-text margin-bottom-l">
        <h2 className="heading-secondary">
          Growth by Sweat Equity
        </h2>
      </div>
      <div className="row center-text">
        <div className="col-1-of-2 left-text">
          <h3 className="heading-tertiary margin-bottom-s">
            Puerto Rican Software Engineer in NYC
          </h3>
          <p className="paragraph">
           After 6+ years in IT, I changed careers into Software Development which was kickstarted by self-learning followed by a coding bootcamp. I've since worked for over a year in the healthcare industry as a developer.
          </p>

          <h3 className="heading-tertiary margin-bottom-s">
            Embrace Adversity
          </h3>
          <p className="paragraph">
           I'm obsessed with seeing how far the human body can be pushed when it comes to strength, endurance, and work capacity. Follow me on my journey as I go from powerlifting/strongman into training for the Edinburgh Marathon on May 27th 2020 and the TCS New York Marathon for 2021!
          </p>

          <a href="#" className="btn-text">Learn more &rarr;</a>
        </div>
        <div className="col-1-of-2">
          <MiniGallery />
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
