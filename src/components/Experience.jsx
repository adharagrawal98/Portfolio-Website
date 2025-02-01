import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-12'>
      {/* Section Title with Animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className='my-20 text-4xl text-center font-bold text-white'
      >
        Experience
      </motion.h2>

      <div className='flex flex-col items-center'>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className='mb-10 flex w-full max-w-4xl flex-wrap rounded-lg bg-neutral-800 p-6 shadow-lg lg:flex-nowrap'
          >
            {/* Date Section */}
            <div className='w-full lg:w-1/4 flex items-center justify-center lg:justify-start'>
              <p className='text-sm font-medium text-purple-400'>{experience.year}</p>
            </div>

            {/* Experience Details */}
            <div className='w-full lg:w-3/4'>
              <h6 className='mb-1 text-md font-semibold text-white'>
                {experience.role} -{' '}
                <a
                  href={experience.companyWebsite}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xl font-bold text-purple-400 hover:underline'
                >
                  {experience.company}
                </a>
              </h6>

              {/* Render description as HTML */}
              <div
                className='mb-4 text-neutral-300'
                dangerouslySetInnerHTML={{ __html: experience.description }}
              />

              {/* Technologies Used */}
              <div className='flex flex-wrap'>
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className='mr-2 mb-2 rounded-lg bg-purple-700 px-3 py-1 text-xs font-medium text-white'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;