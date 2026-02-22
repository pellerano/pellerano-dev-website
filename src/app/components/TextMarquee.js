import React from 'react';
import Marquee from 'react-fast-marquee';

function TextMarquee({ text, className }) {
  return (
    <Marquee className={`overflow-hidden ${className}`}>
      {Array.from({ length: 20 }).map((_, i) => (
        <p key={i} className="text-9xl mx-4 font-bold">
          {text}
        </p>
      ))}
    </Marquee>
  );
}

export default TextMarquee;
