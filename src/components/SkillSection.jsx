import React from 'react'
import * as motion from "motion/react-client";

const SkillSection = () => {
  const skills = [
    { image: "/icon-react.svg", name: "React Js" },
    { image: "/icon-nextjs.svg", name: "Next Js" },
    { image: "/icon-node.svg", name: "Node.js" },
    { image: "/icon-html.svg", name: "HTML" },
    { image: "/icon-css.svg", name: "CSS" },
    { image: "/icon-javscript.svg", name: "JavaScript" },
    { image: "/icon-bootstrap.svg", name: "Bootstrap" },
    { image: "/icon-tailwindcss.svg", name: "Tailwind CSS" },
    { image: "/icon-mongodb.png", name: "MongoDB" },
    { image: "/icon-sql.svg", name: "SQL" },
    { image: "/expressjs.svg", name: "Express Js" },
    { image: "/icon-java.svg", name: "Java" },
    { image: "/icon-python.svg", name: "Python" },
    { image: "/icon-ejs.svg", name: "EJS" },
    { image: "/github.svg", name: "Git & Github" },
    { image: "/icon-figma.svg", name: "Figma" },
    { image: "/icon-canva.png", name: "Canva" },
    { image: "/icon-vscode.svg", name: "VS Code" },
    { image: "/icon-docker.svg", name: "Docker" },
    { image: "/icon-aws.svg", name: "AWS" },
    { image: "/icon-vercel.png", name: "Vercel" },
  ];

  const experiences = [
    {
      period: "Dec 2025 - Present",
      title: "Full-Stack Developer Intern at Mission Global",
      description: "Developing and maintaining web applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to design and implement new features, optimize performance, and ensure responsive design across devices."
    },
  ];

  return (
    <div id='skill' className='bg-linear-to-b from-transparent via-slate-950 to-transparent py-20'>
      <div className='lg:mx-15 mx-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-20'
        >
          <h1 className='font-bold lg:text-5xl text-3xl text-white mb-4'>SKILLS & EXPERIENCE TIMELINE</h1>
          <p className='text-gray-400 text-base'>Technical expertise and professional journey of a Full-Stack Web Developer.</p>
        </motion.div>

        {/* Main Grid: Skills Left, Experience Right */}
        <div className='grid lg:grid-cols-3 gap-16'>
          {/* SKILLS Section - Takes 2 columns on large screen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='lg:col-span-2'
          >
            <h2 className='text-2xl font-bold text-white mb-10 tracking-widest'>SKILLS & TOOLS</h2>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-6'>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
                  className='border-2 border-blue-500/40 rounded-xl p-6 hover:bg-blue-500/5 transition-all duration-300 group cursor-pointer'
                >
                  <div className='flex lg:flex-row md:flex-row flex-col items-center gap-4'>
                    <div className='p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-all'>
                      <img src={skill.image} alt={skill.name} className='w-10 h-10 transition-transform' />
                    </div>
                    <span className='text-white font-semibold text-base group-hover:text-cyan-300 transition-colors'>{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* EXPERIENCE Timeline Section - Takes 1 column on large screen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='lg:col-span-1'
          >
            <h2 className='text-2xl font-bold text-white mb-10 tracking-widest'>EXPERIENCE</h2>
            <div className='relative space-y-8'>
              {/* Timeline Vertical Line */}
              <div className='absolute -left-1 top-0 bottom-0 w-1 bg-linear-to-b from-blue-400 via-cyan-400 to-purple-500'></div>

              {/* Experience Items */}
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className='relative pl-10 group'
                >
                  {/* Timeline Dot */}
                  <div className='absolute -left-3 top-1.5 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-950 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-lg shadow-blue-500/50'></div>

                  {/* Content Card */}
                  <div className='bg-slate-800/40 border border-blue-500/30 rounded-lg p-5 hover:border-cyan-400/60 hover:bg-slate-800/60 transition-all duration-300'>
                    <p className='text-blue-400 text-xs font-bold tracking-wider mb-2'>{exp.period}</p>
                    <h3 className='text-white font-bold text-sm leading-tight mb-3'>{exp.title}</h3>
                    <p className='text-gray-400 text-xs leading-relaxed'>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection;