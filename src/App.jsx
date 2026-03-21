import React from 'react';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import LegacyCounter from './components/LegacyCounter';
import Leadership from './components/Leadership';
import ProjectShowcase from './components/ProjectShowcase';
import MissionVision from './components/MissionVision';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <AboutSection />
      <LegacyCounter />
      <Leadership />
      <ProjectShowcase />
      <MissionVision />
      <Footer />
    </>
  );
}

export default App;
