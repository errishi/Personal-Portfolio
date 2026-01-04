import React from 'react'
import Card from './Card';

const SkillSection = () => {
  return (
    <div id='skill' className='lg:mx-15 mx-8 my-8 mt-20'>
        <h1 className='font-bold text-3xl text-center'>My Skills & Tools</h1>
        <div className='flex justify-evenly lg:justify-center gap-x-12 md:justify-start flex-wrap'>
            <Card image={"/icon-html.svg"} name={"HTML"} />
            <Card image={"/icon-css.svg"} name={"CSS"} />
            <Card image={"/icon-javscript.svg"} name={"JavaScript"} />
            <Card image={"/icon-bootstrap.svg"} name={"Bootstrap"} />
            <Card image={"/icon-tailwindcss.png"} name={"Tailwind CSS"} />
            <Card image={"/icon-react.svg"} name={"React Js"} />
            <Card image={"/icon-node.svg"} name={"Node Js"} />
            <Card image={"/icon-mongodb.png"} name={"MongoDB"} />
            <Card image={"/expressjs.png"} name={"Express Js"} />
            <Card image={"/icon-java.svg"} name={"Java"} />
            <Card image={"/icon-python.svg"} name={"Python"} />
            <Card image={"/icon-git.svg"} name={"Git"} />
            <Card image={"/icon-figma.svg"} name={"Figma"} />
            <Card image={"/icon-canva.png"} name={"Canva"} />
            <Card image={"/icon-vscode.png"} name={"VS Code"} />
        </div>
    </div>
  )
}

export default SkillSection;