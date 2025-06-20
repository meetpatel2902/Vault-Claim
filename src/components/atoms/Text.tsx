import React from 'react';

interface TextProps {
  variant?: 'h2' | 'label' | 'value' | 'log' | 'timestamp';
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ variant = 'label', children, className = '' }) => {
  const baseStyles = 'font-bold';
  const variantStyles = {
    h2: 'text-3xl text-yellow-400 tracking-wide',
    label: 'text-sm text-gray-400 uppercase tracking-wider',
    value: 'text-4xl text-yellow-400 animate-pulse',
    log: 'text-gray-300',
    timestamp: 'text-sm text-gray-500',
  };

  return (
    <p className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </p>
  );
};

export default Text;