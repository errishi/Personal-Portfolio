import React from 'react'

const HeroSection = () => {
  return (
    <div className='lg:mx-15 mx-8 my-10 flex items-center flex-col-reverse lg:flex-row'>
        <div className='lg:w-[35em] w-full lg:absolute'>
            <p className='lg:text-4xl md:text-4xl text-2xl lg:leading-12 md:leading-12 leading-10'>Hello I'm <span className='font-extrabold'>Rishikesh Singh. <br />Full Stack </span> <span className='font-extrabold lg:text-5xl text-3xl md:text-4xl inline-block bg-transparent border text-black border-black rounded-full px-3 py-1'>Web Developer</span> <br />Driven By Code & Creativity.</p>
            <p className='mt-5 text-gray-500 opacity-[0.7] text-[13px] lg:text-xl md:text-xl'>I am a creative and results-driven full-stack developer specializing in turning ideas into dynamic, high-performance web applications. I handle everything from the server logic and database management to crafting the responsive, client-side experience.</p>
        </div>
        <div className='w-full h-full lg:ml-100 mb-10 lg:mb-0'>
            <img src="/Banner.svg" className='lg:mt-0 mt-10 lg:h-[25em] md:h-[20em] h-auto lg:w-full w-auto' alt="banner image" />
        </div>
    </div>
  )
}

export default HeroSection;