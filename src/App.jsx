import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillSection from './components/SkillSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ReactLenis from 'lenis/react';
import { ToastContainer } from 'react-toastify';
import Education from './components/Education';

const App = () => {
  return (
    <div className='bg-slate-900 text-gray-300 overflow-hidden min-h-screen'>
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
          <ToastContainer />
          <HeroSection />
          <SkillSection />
          <AboutSection />
          <ProjectSection />
          <Education />
          <ContactForm />
          <Footer />
      </ReactLenis>
    </div>
  )
}

export default App;