import React from 'react';

interface LogoProps {
  color?: 'gold' | 'white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'gold', className = '' }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 0L0 10V30L20 40L40 30V10L20 0ZM30 25L20 30L10 25V15L20 10L30 15V25Z"
        fill={color === 'gold' ? '#C0A080' : '#FFFFFF'}
      />
      <path
        d="M15 17.5L20 20L25 17.5V22.5L20 25L15 22.5V17.5Z"
        fill={color === 'gold' ? '#C0A080' : '#FFFFFF'}
      />
    </svg>
  );
};

export default Logo;