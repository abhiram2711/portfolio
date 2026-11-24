import React from 'react';

export const Section = ({ id, className = '', children }) => {
  return (
    <section
      id={id}
      className={`py-20 px-6 sm:px-8 max-w-[1240px] mx-auto w-full relative ${className}`}
    >
      {children}
    </section>
  );
};