// TaglineRotator.js

import React, { useEffect, useState } from 'react';

const taglines = [
  'Guiding Young Minds',
  'Nurturing the Creators of Tomorrow',
  'Coaching the Builders',
];

function TaglineRotator() {
  const [index, setIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIn(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length);
        setSlideIn(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-6 overflow-hidden mt-1">
      <div
        className={`absolute left-0 top-0 w-full text-sm md:text-base font-medium text-blue-700 transition-transform duration-300 ease-in-out ${
          slideIn ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        {taglines[index]}
      </div>
    </div>
  );
}

export default TaglineRotator;
