import React from 'react';
import * as motion from "motion/react-client";

const ProjectCard = ({image, title, description, gitlink, projectlink}) => {
  return (
    <motion.div 
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6}}
      whileHover={{y: -10}}
      className='w-full max-w-sm rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300'
    >
      {/* Project Image Container */}
      <div className='relative overflow-hidden h-48 bg-slate-900 border-b-4 border-cyan-500/60'>
        <motion.img 
          initial={{scale: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.3}}
          src={image} 
          className='w-full h-full object-cover' 
          alt="project-image" 
        />
      </div>

      {/* Content Container */}
      <div className='p-6'>
        {/* Title */}
        <h2 className='text-xl font-bold text-white mb-3 line-clamp-2'>{title}</h2>

        {/* Description */}
        <p className='text-gray-300 text-sm mb-6 line-clamp-2'>{description}</p>

        {/* Buttons Container */}
        <div className='flex gap-4'>
          <motion.a 
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            href={gitlink} 
            target='_blank'
            rel='noopener noreferrer'
            className='flex-1'
          >
            <button className='w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer'>
              <i className="fa-solid fa-code"></i>
              View Code
            </button>
          </motion.a>
          
          <motion.a 
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            href={projectlink} 
            target='_blank'
            rel='noopener noreferrer'
            className='flex-1'
          >
            <button className='w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer'>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              Live Demo
            </button>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard;