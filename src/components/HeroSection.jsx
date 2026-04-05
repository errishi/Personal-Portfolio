import React from 'react';
import * as motion from "motion/react-client";

const HeroSection = () => {
  const stats = [
    { icon: "👤", label: "3 Months", text: "Experience" },
    { icon: "⚡", label: "2+", text: "Projects Delivered" },
    { icon: "💻", label: "Tech Stack:", text: "React, Next.js, Node.js, Express.js, MongoDB, Docker, Python, AWS" },
    { icon: "✨", label: "Performance", text: "Optimization Expert" }
  ];

  return (
    <div className='bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center py-20'>
      <div className='lg:mx-15 mx-8 w-full flex items-center flex-col lg:flex-row gap-12'>
        {/* Left Content */}
        <motion.div 
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1}}
          className='lg:w-1/2 w-full'>
          
          {/* Main Heading */}
          <h1 className='text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
            Building Digital <br />
            <span className='text-cyan-400'>Experiences.</span>
          </h1>

          {/* Description */}
          <p className='text-gray-300 text-lg mb-8 leading-relaxed'>
            Full-Stack Web Developer specializing in modern, scalable applications. Let's create something exceptional together.
          </p>

          {/* Hire Me Button */}
          <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className='bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-6 py-3 rounded-lg mb-12 transition-all'
          >
            Hire Me
          </motion.button>

          {/* Stats Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: index * 0.1}}
                className='flex items-start gap-3'
              >
                <span className='text-2xl'>{stat.icon}</span>
                <div>
                  <p className='text-cyan-400 font-semibold'>{stat.label}</p>
                  <p className='text-gray-300 text-sm'>{stat.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Graphic */}
        <motion.div
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1}}
          className='lg:w-1/2 w-full flex justify-center items-center'
        >
          <div className='relative w-full max-w-md aspect-square'>
            {/* Background Glow Effect */}
            <div className='absolute inset-0 bg-linear-to-br from-cyan-500/30 via-purple-500/20 to-pink-500/30 rounded-full blur-3xl'></div>
            
            {/* Main SVG with 3D Isometric Cube */}
            <svg className='w-full h-full' viewBox='0 0 400 400' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <defs>
                {/* Main Gradient */}
                <linearGradient id='cubeGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                  <stop offset='0%' stopColor='#06b6d4' stopOpacity='1' />
                  <stop offset='50%' stopColor='#8b5cf6' stopOpacity='1' />
                  <stop offset='100%' stopColor='#ec4899' stopOpacity='1' />
                </linearGradient>
                
                {/* Secondary Gradient */}
                <linearGradient id='secondaryGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                  <stop offset='0%' stopColor='#06b6d4' stopOpacity='0.7' />
                  <stop offset='100%' stopColor='#a855f7' stopOpacity='0.7' />
                </linearGradient>

                {/* Glow Filter */}
                <filter id='glow'>
                  <feGaussianBlur stdDeviation='2' result='coloredBlur'/>
                  <feMerge>
                    <feMergeNode in='coloredBlur'/>
                    <feMergeNode in='SourceGraphic'/>
                  </feMerge>
                </filter>
              </defs>

              {/* Outer Isometric Cube - Main */}
              <g strokeWidth='2.5' stroke='url(#cubeGradient)' fill='none' filter='url(#glow)'>
                {/* Top Face */}
                <path d='M 100 120 L 200 60 L 300 120 L 200 180 Z' strokeLinecap='round' strokeLinejoin='round'/>
                
                {/* Left Face */}
                <path d='M 100 120 L 100 280 L 200 340 L 200 180 Z' strokeLinecap='round' strokeLinejoin='round'/>
                
                {/* Right Face */}
                <path d='M 300 120 L 300 280 L 200 340 L 200 180 Z' strokeLinecap='round' strokeLinejoin='round'/>
              </g>

              {/* Inner Cube - Smaller */}
              <g strokeWidth='2' stroke='url(#secondaryGradient)' fill='none' opacity='0.8' filter='url(#glow)'>
                {/* Top Face */}
                <path d='M 140 160 L 200 120 L 260 160 L 200 200 Z' strokeLinecap='round' strokeLinejoin='round'/>
                
                {/* Left Face */}
                <path d='M 140 160 L 140 260 L 200 300 L 200 200 Z' strokeLinecap='round' strokeLinejoin='round'/>
                
                {/* Right Face */}
                <path d='M 260 160 L 260 260 L 200 300 L 200 200 Z' strokeLinecap='round' strokeLinejoin='round'/>
              </g>

              {/* Circuit Board Lines - Horizontal */}
              <g strokeWidth='0.8' stroke='url(#cubeGradient)' opacity='0.4' filter='url(#glow)'>
                <line x1='20' y1='100' x2='80' y2='100' strokeLinecap='round'/>
                <line x1='320' y1='100' x2='380' y2='100' strokeLinecap='round'/>
                <line x1='20' y1='300' x2='80' y2='300' strokeLinecap='round'/>
                <line x1='320' y1='300' x2='380' y2='300' strokeLinecap='round'/>
              </g>

              {/* Circuit Board Lines - Vertical */}
              <g strokeWidth='0.8' stroke='url(#secondaryGradient)' opacity='0.3' filter='url(#glow)'>
                <line x1='50' y1='20' x2='50' y2='80' strokeLinecap='round'/>
                <line x1='350' y1='20' x2='350' y2='80' strokeLinecap='round'/>
                <line x1='50' y1='320' x2='50' y2='380' strokeLinecap='round'/>
                <line x1='350' y1='320' x2='350' y2='380' strokeLinecap='round'/>
              </g>

              {/* Circuit Dots */}
              <g fill='url(#cubeGradient)' opacity='0.6' filter='url(#glow)'>
                <circle cx='50' cy='100' r='1.5'/>
                <circle cx='350' cy='100' r='1.5'/>
                <circle cx='50' cy='300' r='1.5'/>
                <circle cx='350' cy='300' r='1.5'/>
                <circle cx='80' cy='100' r='1' opacity='0.5'/>
                <circle cx='320' cy='300' r='1' opacity='0.5'/>
              </g>

              {/* Diagonal Circuit Lines */}
              <g strokeWidth='0.6' stroke='url(#cubeGradient)' opacity='0.25' strokeDasharray='3,3' filter='url(#glow)'>
                <line x1='80' y1='80' x2='120' y2='120' strokeLinecap='round'/>
                <line x1='280' y1='80' x2='320' y2='120' strokeLinecap='round'/>
                <line x1='80' y1='280' x2='120' y2='320' strokeLinecap='round'/>
                <line x1='280' y1='280' x2='320' y2='320' strokeLinecap='round'/>
              </g>
            </svg>

            {/* Animated Rotation Container */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className='absolute inset-0 flex items-center justify-center'
            >
              <div className='w-72 h-72 border-2 border-cyan-500/15 rounded-full'></div>
            </motion.div>

            {/* Pulsing Inner Circle */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className='absolute inset-0 flex items-center justify-center'
            >
              <div className='w-40 h-40 border border-purple-500/20 rounded-full'></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection;