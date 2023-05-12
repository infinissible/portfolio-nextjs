import React from 'react';

const Layout = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 xl:pt-12 lg:p-16 lg:pt-12 md:p-12 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
