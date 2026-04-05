import React from 'react';
import * as motion from "motion/react-client";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarIcon from '@mui/icons-material/Star';

const HeroSection = () => {
  const stats = [
    { icon: <AccountCircleIcon sx={{color: '#06b6d4', fontSize: '1.75rem'}} />, label: "3 Months", text: "Experience" },
    { icon: <FlashOnIcon sx={{color: '#06b6d4', fontSize: '1.75rem'}} />, label: "5+", text: "Projects Delivered" },
    { icon: <LaptopMacIcon sx={{color: '#06b6d4', fontSize: '1.75rem'}} />, label: "Tech Stack:", text: "React, Next.js, Node.js, Express.js, MongoDB, Docker, Python, AWS" },
    { icon: <StarIcon sx={{color: '#06b6d4', fontSize: '1.75rem'}} />, label: "Full Stack", text: "MERN Development" }
  ];

  return (
    <div className='bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center py-20 mt-10'>
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
            MERN Stack Developer crafting modern, scalable web solutions. Passionate about building responsive frontends and robust backends. Let's turn your ideas into reality.
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

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1}}
          className='lg:w-1/2 w-full flex justify-center items-center'
        >
          <div className='relative w-full max-w-md'>
            {/* Outer Animated Glow Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className='absolute inset-0 flex items-center justify-center'
            >
              <div className='w-full aspect-square rounded-full border-2 border-transparent bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-border'></div>
            </motion.div>

            {/* Inner Rotating Circle */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className='absolute inset-4 flex items-center justify-center'
            >
              <div className='w-full aspect-square rounded-full border border-cyan-400/30'></div>
            </motion.div>

            {/* Pulsing Glow Background */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className='absolute inset-0 bg-linear-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 rounded-3xl blur-2xl'
            ></motion.div>

            {/* Glowing Border Container */}
            <div className='absolute inset-0 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-3xl p-0.5'>
              <div className='absolute inset-0.5 bg-slate-900 rounded-3xl'></div>
            </div>

            {/* Image Container with Shine Effect */}
            <motion.div 
              className='relative aspect-square rounded-3xl overflow-hidden border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/20'
            >
              <img 
                src="/man-img.svg" 
                className='w-full h-full object-cover' 
                alt="profile" 
              />
              
              {/* Shine Overlay */}
              <motion.div
                animate={{ 
                  x: ['100%', '-100%'] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className='absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none'
              ></motion.div>
            </motion.div>

            {/* Floating Accent Dots */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className='absolute -top-4 -right-4 w-6 h-6 bg-cyan-400 rounded-full blur-md shadow-lg shadow-cyan-400/50'
            ></motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className='absolute -bottom-4 -left-4 w-4 h-4 bg-blue-500 rounded-full blur-md shadow-lg shadow-blue-500/50'
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection;