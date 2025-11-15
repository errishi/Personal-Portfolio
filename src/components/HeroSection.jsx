import React from 'react'

const HeroSection = () => {
  return (
    <div className='mx-15 my-10 flex items-center flex-col lg:flex-row'>
        <div className='lg:w-[35em] w-full lg:absolute'>
            <p className='text-4xl leading-12'>Hello I'm <span className='font-extrabold'>Rishikesh Singh. <br /> Full Stack</span> <span className='font-extrabold text-5xl inline-block bg-transparent border text-black border-black rounded-full px-3 py-1'>Web Developer</span> <br />Driven By Code & Creativity.</p>
            <p className='mt-5 text-gray-500 opacity-[0.7]'>I am a creative and results-driven full-stack developer specializing in turning ideas into dynamic, high-performance web applications. I handle everything from the server logic and database management to crafting the responsive, client-side experience.</p>
        </div>
        <div className='w-full h-full lg:ml-100'>
            <img src="/Banner.svg" className='lg:mt-0 mt-10 lg:h-[25em] md:h-[20em] h-auto lg:w-full w-auto' alt="banner image" />
        </div>
    </div>
  )
}

export default HeroSection;