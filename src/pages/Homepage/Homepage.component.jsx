import React from 'react';
import Hero from '../../components/hero/Hero.component';
import AboutCard from '../../components/about-card/AboutCard.component';
import BlogPreview from '../../components/blog-preview/BlogPreview.component';
import './Homepage.styles.scss';

const Homepage = () => {
  return (
    <section className="homepage">
      <Hero />
      <AboutCard />
      <BlogPreview />
    </section>
  );
};

export default Homepage;
