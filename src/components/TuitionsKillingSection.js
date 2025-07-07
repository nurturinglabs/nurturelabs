// TuitionsKillingSection.js

import React, { useEffect, useState } from 'react';

const items = [
  { icon: '🧭', title: 'Mentoring', desc: 'No one guiding your dreams, just chasing marks.' },
  { icon: '🧍', title: 'Attention', desc: 'One-size-fits-all. No one really sees you.' },
  { icon: '💡', title: 'Curiosity', desc: 'Learning feels like a chore, not a discovery.' },
  { icon: '🧸', title: 'Childhood', desc: 'No time to play, dream, or just breathe.' },
  { icon: '🏫', title: 'Schooling', desc: 'Classrooms become meaningless when lessons are outsourced.' },
  { icon: '🎨', title: 'Creativity', desc: 'Rote answers replace original thinking.' },
];

function TuitionsKillingSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-left flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Private Tuitions Are Killing...
          </h2>
        </div>
        <div className="md:w-1/2 text-left">
          <div className="transition-all duration-700 ease-in-out">
            <p className="text-2xl md:text-3xl font-semibold text-blue-800">
              {items[index].icon} {items[index].title}
            </p>
            <p className="mt-2 text-lg md:text-xl text-gray-700">
              {items[index].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TuitionsKillingSection;
