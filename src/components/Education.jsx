import React, { useState } from 'react'
import * as motion from "motion/react-client";

const Education = () => {

  const academics = [
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvhIRmO4HJufxuC2kmA2VtoTy1zMM4XF75A&s",
      degree: "B-Tech in Computer Science and Engineering",
      grade: "8.23 CGPA",
      university: "Dr. A. P. J. Abdul Kalam Technical University",
      details: "AKTU is a renowned technical university in India, offering comprehensive education in engineering and technology.",
      year: "2023 - 2027"
    },
    {
      icon: "https://www.clipartmax.com/png/middle/262-2620113_cbse-logo-central-board-of-secondary-education.png",
      degree: "Intermediate in PCM With Computer Science",
      university: "Central Board of Secondary Education (CBSE)",
      details: "CBSE is a prestigious educational board in India, providing quality education and preparing students for competitive exams.",
      year: "2021 - 2023"
    }
  ];

  const certifications = [
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT73XgLxTTKH_QCnRuhHfPIpbaNJtRW0_Tug&s",
      name: "Full Stack Certified Developer",
      provider: "Apna College",
      details: "Full Stack Developer certification for course completion and hands-on practice to build applications independently.",
      year: "Sept 2025"
    },
    {
      icon: "https://handshake.softproindia.in/css/logo.png",
      name: "Full Stack Web Development Workshop",
      provider: "SoftPro India",
      details: "Intensive workshop on full stack web development with hands-on projects.",
      year: "Sept 2025"
    },
    {
      icon: "https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?fit=327%2C345&ssl=1",
      name: "Smart India Hackathon Participant - 2025",
      provider: "Smart India Hackathon",
      details: "Intensive workshop on full stack web development with hands-on projects.",
      year: "Sept 2025"
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Physics_wallah_logo.jpg/250px-Physics_wallah_logo.jpg",
      name: "Generative AI (PW Skills x Microsoft)",
      provider: "PW Skills",
      details: "Comprehensive training on generative AI technologies and applications.",
      year: "Jan 2026"
    },
    {
      icon: "https://media.licdn.com/dms/image/v2/D560BAQEhpRwiRxCO-g/company-logo_200_200/company-logo_200_200/0/1721277934092/be10x_in_logo?e=2147483647&v=beta&t=Tl6ZTAFazAy4CMJgUaBGQNM0qbbQPDGQVSDXa6K0K54",
      name: "AI Tools Workshop",
      provider: "Be10x",
      details: "Hands-on workshop on AI tools and their applications in various industries.",
      year: "Feb 2026"
    },
  ];

  return (
    <div id='education' className='bg-linear-to-b from-transparent via-slate-950 to-slate-900 py-20'>
      <div className='lg:mx-15 mx-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h1 className='font-bold lg:text-5xl text-3xl text-white mb-4 relative inline-block'>
            Education & Certifications
            <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full'></div>
          </h1>
        </motion.div>

        {/* Main Grid */}
        <div className='grid lg:grid-cols-2 gap-12 mt-12'>
          {/* Left Side - Education */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-12'
          >
            {/* Academics Section */}
            <div>
              <h2 className='text-2xl font-bold text-white mb-3 tracking-widest'>Academics</h2>
              <p className='text-gray-400 text-sm mb-8'>Degrees and exploits to graduates activities.</p>

              <div className='space-y-6'>
                {academics.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className='flex gap-4 group'
                  >
                    {/* Icon */}
                    <div className='shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-slate-900 group-hover:scale-110 transition-transform overflow-clip p-1'>
                      <img src={item.icon} alt="icon" />
                    </div>

                    {/* Content */}
                    <div className='grow'>
                      <h3 className='text-white font-bold text-base mb-1'>{item.degree}</h3>
                      <p className='text-gray-300 font-semibold text-sm mb-1'>{item.university}</p>
                      <p className='text-gray-400 text-xs mb-2'>{item.details}</p>
                      <p className='text-gray-400 text-xs mb-2'>{item.grade}</p>
                      <p className='text-cyan-400 text-xs font-semibold'>{item.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}

          {/* Right Side - Contact Form */}
          <motion.div>
            <div>
              <h2 className='text-2xl font-bold text-white mb-6 tracking-widest'>Certifications</h2>

              <div className='space-y-6'>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className='flex gap-4 group'
                  >
                    {/* Icon Circle */}
                    <div className='shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center font-bold text-slate-900 group-hover:scale-110 transition-transform text-sm overflow-clip'>
                      <img src={cert.icon} alt={cert.provider} />
                    </div>

                    {/* Content */}
                    <div className='grow'>
                      <h3 className='text-white font-bold text-base mb-1'>{cert.name}</h3>
                      <p className='text-gray-300 font-semibold text-sm mb-1'>{cert.provider}</p>
                      <p className='text-gray-400 text-xs mb-2'>{cert.details}</p>
                      <p className='text-cyan-400 text-xs font-semibold'>{cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Education;