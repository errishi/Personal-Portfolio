import React from 'react'
import ProjectCard from './ProjectCard';
import * as motion from "motion/react-client";

const ProjectSection = () => {
  const projects = [
    {
      image: "/project-1.png",
      title: "ThaliExpress - E-commerce Platform",
      techs: "React - Node.js - MongoDB",
      description: "A full-featured e-commerce platform for online food delivery with product listings, shopping cart, and secure checkout functionality.",
      projectlink: "https://thali-express.vercel.app/",
      gitlink: "https://github.com/errishi/ThaliExpress-online-food-delivery"
    },
    {
      image: "/project-2.png",
      title: "Analytics Hub - Data Visualization",
      techs: "React - D3.js - Node.js",
      description: "Real-time analytics dashboard with interactive charts and data visualization capabilities.",
      projectlink: "https://example.com/project-2",
      gitlink: "https://github.com/example/project-2"
    },
    {
      image: "/project-3.png",
      title: "Connect - Social Network",
      techs: "React - MongoDB - PostgreSQL",
      description: "A social networking platform with real-time messaging and user collaboration features.",
      projectlink: "https://example.com/project-3",
      gitlink: "https://github.com/example/project-3"
    },
    {
      image: "/project-4.png",
      title: "TaskFlow - Real-time Collaboration",
      techs: "Angular - Firebase - TypeScript",
      description: "Collaborative task management tool with real-time updates and team synchronization.",
      projectlink: "https://example.com/project-4",
      gitlink: "https://github.com/example/project-4"
    },
    {
      image: "/project-5.png",
      title: "PennyWise - Finance Tracker",
      techs: "React - Express - MySQL",
      description: "Personal finance management application with expense tracking and budget planning.",
      projectlink: "https://example.com/project-5",
      gitlink: "https://github.com/example/project-5"
    },
    {
      image: "/project-6.png",
      title: "ContentAI - Content Generator",
      techs: "React - OpenAI API - Docker",
      description: "AI-powered content generation tool with multiple content creation templates.",
      projectlink: "https://example.com/project-6",
      gitlink: "https://github.com/example/project-6"
    }
  ];

  return (
    <div id='project' className='bg-linear-to-b from-slate-950 to-slate-900 py-20'>
      <div className='lg:mx-15 mx-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h1 className='font-bold lg:text-5xl text-3xl text-white mb-4 relative inline-block'>
            PROJECTS SHOWCASE
            <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full'></div>
          </h1>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className='h-full'
            >
              <div className='relative bg-slate-800/40 border border-blue-500/40 rounded-2xl overflow-hidden hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 h-full flex flex-col'>
                {/* Project Image Container */}
                <div className='relative overflow-hidden h-40 bg-slate-900 border-b-2 border-cyan-500/60'>
                  <motion.img 
                    initial={{scale: 1}}
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                    src={project.image} 
                    className='w-full h-full object-cover' 
                    alt={project.title} 
                  />
                </div>

                {/* Content */}
                <div className='p-5 flex flex-col grow'>
                  {/* Title */}
                  <h3 className='text-lg font-bold text-white mb-2'>{project.title}</h3>

                  {/* Tech Stack Tags */}
                  <p className='text-xs text-cyan-400 font-semibold mb-3'>{project.techs}</p>

                  {/* Description */}
                  <p className='text-gray-300 text-sm mb-5 grow line-clamp-2'>{project.description}</p>

                  {/* Buttons */}
                  <div className='flex gap-3'>
                    <motion.a 
                      whileHover={{scale: 1.05}}
                      whileTap={{scale: 0.95}}
                      href={project.gitlink} 
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1'
                    >
                      <button className='w-full bg-slate-700/50 border border-slate-600 hover:bg-slate-700 hover:border-cyan-400 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-xs'>
                        <i className="fa-solid fa-code"></i>
                        View Code
                      </button>
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{scale: 1.05}}
                      whileTap={{scale: 0.95}}
                      href={project.projectlink} 
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1'
                    >
                      <button className='w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-xs'>
                        Live Demo
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </button>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSection;