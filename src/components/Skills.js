import React from 'react';
import Image from 'next/image';
import js from '../../public/images/svgs/js.svg';
import ts from '../../public/images/svgs/ts.svg';
import next from '../../public/images/svgs/nextjs.svg';
import nest from '../../public/images/svgs/nestjs.svg';
import cSharp from '../../public/images/svgs/c-sharp.svg';
import java from '../../public/images/svgs/java.png';
import spring from '../../public/images/svgs/spring.png';
import dotNet from '../../public/images/svgs/dotNet.svg';
import node from '../../public/images/svgs/node.svg';
import mongodb from '../../public/images/svgs/mongodb.svg';
import mysql from '../../public/images/svgs/mysql.svg';
import graphql from '../../public/images/svgs/graphql.svg';

const Skill = ({ name, src, alt }) => {
  return (
    <div className='w-[35%] h-auto my-2 mx-auto group hover:scale-[1.1] transition-all '>
      <Image alt={alt} src={src} />
      <span className='border rounded-xl bg-gray-700 text-white flex justify-center scale-0 group-hover:scale-100  transition-all sm:!text-base '>
        {name}
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full mb-24 text-center md:text-6xl md:mt-32'>
        Skills
      </h2>

      <div className='grid w-full grid-cols-9 gap-16 xl:gap-8 sm:gap-8 sm:grid-cols-2'>
        <div className='col-span-3 sm:col-span-1'>
          <span className='font-bold text-3xl uppercase text-dark/75 dark:text-light/75 flex justify-center mb-6 sm:!text-xl'>
            Frontend
          </span>
          <Skill name={'JavaScript'} alt={'JavaScript Icon'} src={js} />
          <Skill name={'TypeScript'} alt={'TypeScript Icon'} src={ts} />
          <Skill name={'NestJS'} alt={'NestJS Icon'} src={next} />
        </div>
        <div className='col-span-3 sm:col-span-1'>
          <span className='font-bold text-3xl uppercase text-dark/75 dark:text-light/75 flex justify-center mb-6 sm:!text-xl'>
            Backend
          </span>
          <Skill name={'Java'} alt={'Java Icon'} src={java} />
          <Skill name={'Spring'} alt={'Spring Icon'} src={spring} />
          <Skill name={'NodeJS'} alt={'NodeJS Icon'} src={node} />
          <Skill name={'NestJS'} alt={'NestJS Icon'} src={nest} />
        </div>
        <div className='col-span-3 sm:col-span-1'>
          <span className='font-bold text-3xl uppercase text-dark/75 dark:text-light/75 flex justify-center mb-6 sm:!text-xl'>
            Database
          </span>
          <Skill name={'MySQL'} alt={'MySQL Icon'} src={mysql} />
          <Skill name={'MongoDB'} alt={'MongoDB Icon'} src={mongodb} />
          <Skill name={'GraphQL'} alt={'GraphQL Icon'} src={graphql} />
        </div>
      </div>
    </>
  );
};

export default Skills;
