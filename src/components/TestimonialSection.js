// TestimonialSection.js

import React, { useEffect, useState } from 'react';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    quote: "The insights from professionals helped me see what a real career path looks like. I loved how personal the approach was!",
    name: "Divya Rao",
    location: "Yelahanka, Bangalore",
  },
  {
    quote: "I was overwhelmed with options. NurtureLabs helped me understand my strengths and guided me patiently.",
    name: "Nikhil Joshi",
    location: "Sahakarnagar, Bangalore",
  },
  {
    quote: "NurtureLabs helped me find clarity in choosing between Engineering and Design. Their one-on-one session was truly eye-opening.",
    name: "Ananya Gowda",
    location: "Hebbal, Bangalore",
  },
  {
    quote: "The mentoring sessions made my son confident about his path after 12th. Highly recommend NurtureLabs to all parents!",
    name: "Bhargav",
    location: "Jakkur, Bangalore",
  },
  {
    quote: "I had no idea what stream to pick. Thanks to their team, I now know what I actually enjoy and can build a career in.",
    name: "Raghavandra S",
    location: "Kempapura, Bangalore",
  },
  {
    quote: "Their sessions are practical, friendly, and truly personalized. I felt heard and guided at every step.",
    name: "Priya Narayana",
    location: "Bangalore, Bangalore",
  },
];

function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const first = testimonials[current];
    const second = testimonials[(current + 1) % testimonials.length];
    return [first, second];
  };

  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          What Students & Parents Say
        </h2>

        <div className="relative min-h-[280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ease-in-out">
            {getVisibleTestimonials().map(({ quote, name, location }, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl shadow-md bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 flex flex-col justify-between animate-fadeIn hover:shadow-lg transition duration-300"
              >
                <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-blue-400 mb-3" />
                <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">“{quote}”</p>
                <div className="text-base font-semibold text-blue-900">
                  — {name}<br />
                  <span className="text-sm text-gray-500 font-normal">{location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Optional navigation dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: testimonials.length / 2 }, (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${current === i * 2 ? 'bg-blue-600' : 'bg-gray-300'} transition-all duration-300`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
