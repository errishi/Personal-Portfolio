import React from 'react'
import * as motion from "motion/react-client";

const AboutSection = () => {
    const attributes = [
        {
            icon: "🧠",
            title: "Problem Solver",
            description: "Tackling complex challenges with creative logic."
        },
        {
            icon: "👥",
            title: "Team Player",
            description: "Fostering seamless collaboration in agile teams."
        },
        {
            icon: "🎯",
            title: "Adaptable",
            description: "Embracing new technologies and methodologies."
        },
        {
            icon: "💻",
            title: "User-Focused",
            description: "Prioritizing intuitive and engaging experiences."
        }
    ];

    return (
        <div id='about' className='bg-linear-to-b from-slate-900 via-slate-950 to-slate-900 py-20 relative overflow-hidden'>
            {/* Background Circuit Pattern */}
            <div className='absolute inset-0 opacity-5'>
                <svg className='w-full h-full' viewBox='0 0 1200 800'>
                    <defs>
                        <pattern id='circuit' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'>
                            <line x1='10' y1='50' x2='90' y2='50' stroke='#06b6d4' strokeWidth='1'/>
                            <line x1='50' y1='10' x2='50' y2='90' stroke='#06b6d4' strokeWidth='1'/>
                            <circle cx='50' cy='50' r='3' fill='#06b6d4'/>
                        </pattern>
                    </defs>
                    <rect width='1200' height='800' fill='url(#circuit)'/>
                </svg>
            </div>

            <div className='lg:mx-15 mx-8 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='flex justify-center'
                    >
                        <div className='relative'>
                            {/* Cyan Glow Border */}
                            <div className='absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 rounded-3xl p-[3px]'>
                                <div className='absolute inset-[3px] bg-slate-900 rounded-3xl'></div>
                            </div>

                            {/* Image Container */}
                            <div className='relative w-80 h-96 rounded-3xl overflow-hidden border-2 border-cyan-400/50'>
                                <img 
                                    src="/man-img.svg" 
                                    className='w-full h-full object-cover' 
                                    alt="profile" 
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='space-y-8'
                    >
                        {/* Heading */}
                        <h1 className='text-5xl font-bold text-cyan-400 mb-6'>ABOUT ME</h1>

                        {/* Description */}
                        <div className='space-y-5 text-gray-300 leading-relaxed'>
                            <p>
                                I'm a passionate <span className='text-cyan-400 font-semibold'>Full-Stack Web Developer</span> with experience building scalable, robust, and user-centric web applications. My expertise spans front-end frameworks like <span className='text-cyan-400'>React.Js, Next.Js</span>, paired with powerful back-end technologies such as <span className='text-cyan-400'>Node.js, Express.Js, and MongoDB</span>.
                            </p>

                            <p>
                                I thrive in collaborative environments, bridging the gap between design and engineering to deliver exceptional digital products. I'm driven by curiosity and a relentless pursuit of clean code and innovative solutions.
                            </p>
                        </div>

                        {/* Key Attributes Section */}
                        <div className='pt-6'>
                            <h2 className='text-2xl font-bold text-cyan-400 mb-6 tracking-widest'>KEY ATTRIBUTES</h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                {attributes.map((attr, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className='flex items-start gap-3'
                                    >
                                        <span className='text-2xl shrink-0'>{attr.icon}</span>
                                        <div>
                                            <p className='text-cyan-400 font-bold text-sm'>{attr.title}</p>
                                            <p className='text-gray-400 text-xs'>{attr.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Download Resume Button */}
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(6, 182, 212, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            href="/Rishikesh_Singh_Resume.pdf"
                            download
                            className='inline-block mt-6'
                        >
                            <button className='border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm tracking-widest uppercase cursor-pointer'>
                                <i className="fa-solid fa-download"></i>
                                Download Resume
                            </button>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;