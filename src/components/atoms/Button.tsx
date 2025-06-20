import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children, className = '' }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`w-full py-4 rounded-xl text-lg font-bold uppercase tracking-wide transition-all duration-500 ease-in-out relative overflow-hidden ${
        disabled
          ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
          : 'bg-yellow-500 text-black hover:bg-yellow-400 animate-glow active:animate-bounce-smooth'
      } ${className}`}
    >
      {children}
      {!disabled && (
        <span className="absolute inset-0 pointer-events-none animate-pulse-overlay-smooth opacity-0 hover:opacity-20 bg-white rounded-xl" />
      )}
    </button>
  );
};

export default Button;