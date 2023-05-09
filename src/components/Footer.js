import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          Build with by &nbsp;
          <Link
            href='https://jinventor.com'
            className='underline underline-offset-2'
          >
            Jinventor
          </Link>
        </div>

        <Link
          href='https://jinventor.com'
          target={'_blank'}
          className='underline underline-offset-2'
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
