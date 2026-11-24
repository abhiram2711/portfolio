import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  target,
  rel,
  icon: Icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 active:scale-[0.98] select-none';

  const variants = {
    primary: 'bg-electric-blue hover:bg-electric-deep text-white shadow-glow-sm border border-electric-blue/40',
    secondary: 'bg-navy-800/80 hover:bg-navy-700/80 text-text-primary border border-white/10 hover:border-white/20',
    ghost: 'bg-transparent hover:bg-white/5 text-text-muted hover:text-text-primary border border-transparent',
    outline: 'bg-transparent text-cyan-accent border border-cyan-accent/40 hover:bg-cyan-accent/10 hover:border-cyan-accent',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 font-mono',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses} {...props}>
        {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
      {children}
    </button>
  );
};