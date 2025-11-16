import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialMedia from './components/SocialMedia';
import SkillSection from './components/SkillSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ReactLenis from 'lenis/react';

const App = () => {
  return (
    <>
      <ReactLenis
      root
      options={{
        lerp: 0.1,      //smooth factor
        duration: 1.2,    //animation duration
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,         //keep mobile touch normal
        touchMultiplier: 2
      }}
      >
        <Navbar />
        <HeroSection />
        <SocialMedia />
        <SkillSection />
        <AboutSection />
        <ProjectSection />
        <ContactForm />
        <Footer />
      </ReactLenis>
    </>
  )
}

export default App;