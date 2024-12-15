import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Service from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Home() {
  return (
    <div>
      <HeroSection id="home" />
      <AboutMe id="about" />
      <Projects id="projects" />
      <Service id="services" />
      <Contact id="contact" />
    </div>
  );
}

export default Home;