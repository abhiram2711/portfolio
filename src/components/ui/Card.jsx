import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hoverEffect = true, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -4, borderColor: 'rgba(47, 128, 255, 0.4)' } : undefined}
      transition={{ duration: 0.2 }}
      className={`bg-navy-900/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 shadow-glow-card ${className}`}
    >
      {children}
    </motion.div>
  );
};