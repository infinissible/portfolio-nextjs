import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import article1 from '../../public/images/articles/pagination component in reactjs.jpg';
import article2 from '../../public/images/articles/create loading screen in react js.jpg';
import article3 from '../../public/images/articles/img-f1.png';
import article4 from '../../public/images/articles/React nesting components.png';
import { motion, useMotionValue } from 'framer-motion';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline'>
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'
      />
    </Link>
  );
};

const Article = ({ img, title, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'
    >
      <MovingImg title={title} img={img} link={link} />
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
      <Link
        href={link}
        target='_blank'
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>
          {title}
        </h2>
      </Link>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Jinventor | Articles Page</title>
        <meta name='description' content='any description' />
      </Head>

      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Technical Insights!'
            className='mb-16 xl:!text-7xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />
          <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1'>
            <FeaturedArticle
              title='Will Programmers Really Be Replaced by AI?'
              link='https://hackernoon.com/will-programmers-really-be-replaced-by-ai'
              img={article3}
            />

            <FeaturedArticle
              title='React Nesting Components: Rules to Follow'
              link='https://blog.bitsrc.io/react-nesting-components-rules-to-follow-c0658ee6ef5'
              img={article4}
            />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>
            All Articles
          </h2>
          <ul>
            <Article
              title='Build A Custom Pagination Component In Reactjs From Scratch'
              link='https://devdreaming.com/blogs/create-pagination-component-reactjs'
              img={article1}
            />
            <Article
              title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
              link='https://dev.to/codebucks/form-validation-in-reactjs-by-building-reusable-custom-hook-1bg7'
              img={article2}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
