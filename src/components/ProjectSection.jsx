import React from 'react'
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <div className='lg:p-15 p-8 my-15 bg-black text-white'>
        <h1 className='font-bold text-3xl text-center'>My Projects</h1>
        <ProjectCard image={"/project-1.png"} title={"ThaliExpress food delivery platform"} description={"ThaliExpress is an online food delivery platform inspired by India’s traditional thali culture — offering wholesome meals with multiple dishes on a single platter."} projectlink={"https://thali-express.vercel.app/"} gitlink={"https://github.com/errishi/ThaliExpress-online-food-delivery"} />
    </div>
  )
}

export default ProjectSection;