import React from 'react';
import Button from '@mui/material/Button';

const ProjectCard = ({image, title, description, gitlink, projectlink}) => {
  return (
    <div className='lg:mt-15 mt-10 flex justify-evenly flex-col lg:flex-row items-center'>
        <img src={image} className='rounded lg:w-[500px] md:w-[500px] w-[350px]' alt="project-image" />
        <div className='lg:w-1/2 w-[95%] mt-10 lg:mt-0'>
            <h2 className='text-3xl font-bold mb-5'>{title}</h2>
            <p className='text-[14px]'>{description}</p>
            <div className='flex gap-10 mt-7'>
                <a href={projectlink} target='blank'>
                  <Button variant="contained" className='bg-white'>See Project &nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></Button>
                </a>
                <a href={gitlink} target='blank'>
                  <Button variant="outlined">Git &nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></Button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;