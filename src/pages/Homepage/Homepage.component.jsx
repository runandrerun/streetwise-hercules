import React from 'react';
import Hero from '../../components/hero/Hero.component';
import AboutCard from '../../components/about-card/AboutCard.component';

const Homepage = () => {
  return (
    <section className="homepage">
      <Hero />
      <AboutCard />
    </section>
  );
};

export default Homepage;
