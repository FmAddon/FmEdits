import React from 'react';

interface FmLogoProps {
  className?: string;
  alt?: string;
}

export const FmLogo: React.FC<FmLogoProps> = ({ className = 'w-full h-full', alt = 'FmEdits Logo' }) => {
  return (
    <img
      src="/logo.png"
      alt={alt}
      className={`w-full h-full object-cover select-none ${className}`}
      referrerPolicy="no-referrer"
      loading="eager"
    />
  );
};

