import React from 'react'
import { EDUCATIONS } from '../constants'
import { motion } from 'framer-motion';
const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className='my-20 text-4xl text-center font-bold text-white'>Education</motion.h2>
      <div className=''>
        {EDUCATIONS.map((education, index) => (
          <div key={index} className='mb-8 flex flex-wrap justify-center'>
            <div className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'>{education.year}</p>
            </div>
            <div className='w-full lg:w-3/4 max-w-xl'>
              <h6 className='mb-2 font-semibold'>
                {education.degree} -
                <span className='text-lg text-purple-400'> {education.university} </span>

              </h6>
              <p className='mb-4 text-neutral-400'>
                {education.grade}
              </p>
              {education.coursework.map((course, index) => (
                <span key={index} className='text-sm font-medium text-purple-400'>{course} | </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
