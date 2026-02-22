import React from 'react';
import GlassCard from './GlassCard';

function GlassIconButton({
  icon,
  hoverClass = 'hover:bg-amber-400',
  textColor = 'text-white',
  hoverTextColor = 'hover:text-[#251d1d]',
  onClick,
}) {
  return (
    <div onClick={onClick}>
      <GlassCard
        className={`${hoverClass} ${textColor} ${hoverTextColor} p-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out`}
      >
        {icon}
      </GlassCard>
    </div>
  );
}

export default GlassIconButton;
