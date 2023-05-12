import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;{' '}
          <a
            href={companyLink}
            target={'_blank'}
            className='text-primary dark:text-primaryDark capitalize text-xl'
          >
            <br /> @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='Freelance'
            company='Self-employed'
            companyLink='https://jinventor.com'
            time='Aug 2022 - Pesent'
            address='Riverside, CA'
            work='Developed a full stack application with REST APIs using a React, Express, Node, MongoDB, Java, Spring Boot, SQL, NoSQL databases'
          />

          <Details
            position='Computer Consultant'
            company='Baanyan Software Services, Inc.'
            companyLink='www.baanyan.com'
            time='Aug 2022 - May 2023'
            address='Edison, NJ'
            work='Trained with Java, Spring Boot, Spring MVC, Spring Hibernate, Spring JDBC, Spring IOC, Spring Security, Web Services (SOAP and REST API), Microservices (Docker and Kubernetes), distributed messaging system (Kafka), CI/CD pipeline (Jenkins), cloud platform (Spring Cloud and AWS Cloud) and unit testing (JUnit and Mockito)'
          />

          <Details
            position='Postdoctoral Researcher'
            company='Winston Chung Global Energy Center'
            companyLink='www.ucr.edu'
            time='2022-Present'
            address='Riverside, CA'
            work='Analyzed the energy storage systems such as lithium-ion batteries and solar cells to improve the energy capacity and efficiency'
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
