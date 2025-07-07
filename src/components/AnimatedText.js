import React, { useEffect, useState } from 'react';

const phrases = [
  "Why Engineering ?",
  "Which Engineering Course?",
  "Should I do CSE or ECE or Biomedical or Chemical ?",
  "Is CSE still the best bet?",
  "Is Biotechnology a better option?",
  "Should I gowith Commerce or Arts?",
];

function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2500); // change every 2.5 seconds

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="text-xl md:text-2xl text-blue-700 font-semibold h-8 md:h-10 transition-all duration-500 ease-in-out">
      {phrases[index]}
    </div>
  );
}

export default AnimatedText;
