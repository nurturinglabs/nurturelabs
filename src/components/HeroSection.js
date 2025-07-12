// HeroSection.js

import React from 'react';
//import AnimatedText from './AnimatedText';
import studentsHero from '../assets/students-hero.png';

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white px-4 md:px-12 min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">

        {/* Text */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <span className="text-blue-600 text-2xl md:text-3xl font-semibold animate-bounce">
            🌱We Nurture the Creators of Tomorrow🌳
          </span>

          

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Rote memorization. No personal attention. No curiosity. It’s time to break free from this broken system and rediscover joyful, meaningful learning.
          </p>

          <div className="space-x-4 mt-4">
            <a href="https://calendly.com/nurturinglabs/30min" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
                📅 Book Free Consultation
              </button>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={studentsHero}
            alt="Indian students in front of a college"
            className="w-full md:w-[480px] mx-auto drop-shadow-xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
