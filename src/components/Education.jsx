import React, { useState } from 'react'
import * as motion from "motion/react-client";

const Education = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const academics = [
    {
      icon: "🎓",
      degree: "Master of Science in Computer Science",
      university: "Stanford University",
      details: "University of Science in Computer science and the University",
      year: "2023"
    },
    {
      icon: "🏆",
      degree: "Bachelor of Science in Information Technology",
      university: "Massachusetts Institute of Technology",
      details: "University of Science in Information Institute and Technology",
      year: "2024"
    }
  ];

  const certifications = [
    {
      icon: "aws",
      name: "AWS Certified Developer - Associate",
      provider: "Amazon Web Services",
      details: "AWS Certified Developer - Associate in AWS/3 certain develops and a Amazon Web Services.",
      year: "2023"
    },
    {
      icon: "google",
      name: "Google Professional Cloud Developer",
      provider: "Google Cloud",
      details: "Google Professional Cloud Developer for hackathons in Google Cloud.",
      year: "2024"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id='contact' className='bg-linear-to-b from-slate-950 to-slate-900 py-20'>
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
            initial={{ opacity: 0, x: -50 }}
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
                    <div className='shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-slate-900 group-hover:scale-110 transition-transform'>
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className='grow'>
                      <h3 className='text-white font-bold text-base mb-1'>{item.degree}</h3>
                      <p className='text-gray-300 font-semibold text-sm mb-1'>{item.university}</p>
                      <p className='text-gray-400 text-xs mb-2'>{item.details}</p>
                      <p className='text-cyan-400 text-xs font-semibold'>{item.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div>
            <div>
              <h2 className='text-2xl font-bold text-white mb-3 tracking-widest'>Certifications</h2>

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
                    <div className='shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center font-bold text-slate-900 group-hover:scale-110 transition-transform text-sm'>
                      {cert.icon === 'aws' ? 'AWS' : 'GCP'}
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