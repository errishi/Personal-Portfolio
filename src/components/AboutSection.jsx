import React from 'react'
import SocialMedia from './SocialMedia';
import * as motion from "motion/react-client";

const AboutSection = () => {
    return (
        <div id='about' className='flex justify-evenly flex-col lg:flex-row lg:mx-15 lg:-ml-8 mx-8 my-3 mt-20'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}

                className='lg:w-1/2 w-75 h-full m-auto lg:m-0'>
                <img src="/man-img.svg" className='lg:mt-0 mt-10 lg:h-[25em] md:h-[20em] h-auto lg:w-full w-auto' alt="man" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}

                className='lg:w-1/2 w-full lg:-ml-20 mt-10 lg:mt-0'>
                <h1 className='font-bold text-3xl mb-7 text-center lg:text-start'>About Me</h1>
                <p>
                    I am a B.Tech Computer Science student specializing in <b>full-stack web development</b>, with a passion for building user-centric and scalable applications.
                    My expertise began with mastering HTML5, CSS, and JavaScript, and has expanded to the complete <b>MERN stack</b> (MongoDB, Express.js, React.js, Node.js). I am continuously honing my problem-solving skills through Data Structures & Algorithms (Java) and exploring new domains with Python.
                    With a keen eye for UI/UX design and a comprehensive understanding of end-to-end development, I am driven to tackle complex problems and deliver elegant solutions. I am actively seeking an internship or collaborative role where I can contribute to impactful projects and grow as a software engineer.
                    Open to networking and new opportunities. <b>Let's connect!</b>
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}

                    className='mt-10 lg:mt-20'>
                    <SocialMedia />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default AboutSection;