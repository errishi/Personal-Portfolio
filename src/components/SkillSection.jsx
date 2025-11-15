import React from 'react'
import Card from './Card';

const SkillSection = () => {
  return (
    <div className='lg:mx-15 mx-8 my-4'>
        <h1 className='font-bold text-3xl text-center'>My Skills</h1>
        <div className='flex justify-evenly lg:justify-start gap-10 md:justify-start'>
            <Card image={"/icon-git.svg"} name={"Git"} />
            <Card image={"/icon-javscript.svg"} name={"JavaScript"} />
        </div>
    </div>
  )
}

export default SkillSection;