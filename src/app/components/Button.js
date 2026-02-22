import React from 'react';

function Button({ text, color = '#d9d9d9', textColor = '#000000', action }) {
  return (
    <div
      style={{ backgroundColor: color, color: textColor }}
      className={`font-bold px-6 py-3 rounded-full cursor-pointer`}
      onClick={() => action()}
    >
      {text}
    </div>
  );
}

export default Button;
