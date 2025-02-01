import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className='my-20 text-4xl text-center font-bold text-white'>Projects</motion.h2>
      <div className=''>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap justify-center'>
            <div className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'>{project.category}</p>
            </div>
            <div className='w-full lg:w-3/4 max-w-xl'>
              <h6 className='mb-2 font-semibold'>
                {project.title}
              </h6>
              <p className='mb-4 text-neutral-400' dangerouslySetInnerHTML={{ __html: project.description }} />
              <div className='flex flex-wrap'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 mb-2 rounded bg-white px-2 py-1 text-sm font-medium text-purple-800'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;