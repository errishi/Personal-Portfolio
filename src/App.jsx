import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialMedia from './components/SocialMedia';
import SkillSection from './components/SkillSection';
import AboutSection from './components/AboutSection';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SocialMedia />
      <SkillSection />
      <AboutSection />
    </>
  )
}

export default App;