import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialMedia from './components/SocialMedia';
import SkillSection from './components/SkillSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SocialMedia />
      <SkillSection />
      <AboutSection />
      <ProjectSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App;