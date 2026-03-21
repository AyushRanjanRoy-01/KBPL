import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import LegacyCounter from './components/LegacyCounter';
import Leadership from './components/Leadership';
import ProjectShowcase from './components/ProjectShowcase';
import MissionVision from './components/MissionVision';
import Footer from './components/Footer';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <>
      <Navbar />
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
