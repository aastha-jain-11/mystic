import React from 'react';

interface SacredGeometryProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SacredGeometry: React.FC<SacredGeometryProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  return (
    <div className={`${sizeClasses[size]} ${className} animate-cosmic-rotate opacity-20`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-accent-400"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary-400"
        />
        <circle
          cx="50"
          cy="50"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-secondary-400"
        />
        <polygon
          points="50,20 65,35 65,65 50,80 35,65 35,35"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-accent-300"
        />
        <polygon
          points="50,5 80,25 80,75 50,95 20,75 20,25"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-primary-300"
        />
      </svg>
    </div>
  );
};

export default SacredGeometry;