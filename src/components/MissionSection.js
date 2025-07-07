// MissionSection.js

import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';
import missionImage from '../assets/Mission.png';

function MissionSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-14 px-4 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Text Side */}
        <div className="flex-1 space-y-5 text-center md:text-left animate-fade-up duration-1000">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <SparklesIcon className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-fade-in">
              Our Mission
            </h2>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 animate-fade-in delay-200">
          At <span className="font-semibold text-red-700">NurtureLabs</span>, we believe that true learning is being crushed under the weight of private tuitions.
          Our mission is to help students break free from rote learning and rediscover curiosity. Through <span className="font-semibold text-red-800">personalized mentoring</span> and
          <span className="font-semibold"> meaningful guidance</span>, we focus on clarity, confidence, and a lifelong love for learning — not just exam marks.
          </p>

        </div>

        {/* Image Side */}
        <div className="flex-1">
          <img
            src={missionImage}
            alt="Mentorship mission illustration"
            className="w-full max-w-md mx-auto rounded-xl drop-shadow-md animate-fade-in-up duration-700 ease-in-out delay-300"
          />
        </div>
      </div>
      {/* Background SVG Blob */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] -z-10 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#bfdbfe"
            d="M0,0 C200,300 600,300 800,0 L800,600 L0,600 Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default MissionSection;
