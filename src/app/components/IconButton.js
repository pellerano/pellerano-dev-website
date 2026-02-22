import React from 'react';

function IconButton({
  icon,
  bgClass = 'bg-zinc-300',
  hoverClass = 'hover:bg-amber-400',
  textColor = 'text-[#383d38]',
  hoverTextColor = 'hover:text-[#251d1d]',
}) {
  return (
    <div
      className={`${bgClass} ${hoverClass} ${textColor} ${hoverTextColor} p-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out`}
    >
      {icon}
    </div>
  );
}

export default IconButton;
