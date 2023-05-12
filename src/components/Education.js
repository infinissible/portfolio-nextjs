import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <span className='capitalize font-bold text-2xl sm:text-xl xs:text-lg '>
          {type} <br />
        </span>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {place}
        </span>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Education
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            type='PhD, Chemical Engineering'
            time='Sep 2015 - Dec 2020'
            place='University of California, Riverside, Riverside, CA'
          />
          <Details
            type='M.S, Chemical Engineering'
            time='Mar 2012 - Aug 2014'
            place='Chonnam National University, Gwangju, South Korea'
          />
          <Details
            type='B.S, Chemical Engineering'
            time='Mar 2010 - Feb 2012'
            place='Chonnam National University, Gwangju, South Korea'
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
