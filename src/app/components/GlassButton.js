import React from 'react';
import GlassCard from './GlassCard';

function GlassButton({ children, className, onClick }) {
  return (
    <GlassCard
      onClick={onClick}
      className={`px-4 py-2 rounded-full cursor-pointer ${className}`}
    >
      {children}
    </GlassCard>
  );
}

export default GlassButton;
