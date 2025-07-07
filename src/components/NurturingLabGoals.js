// NurturingLabGoals.js

import React from 'react';
import mentorImage from '../assets/mentor-illustration.png'; // Make sure this image exists

function NurturingLabGoals() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-purple-50 py-24 px-6 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            At Nurturing Lab, We Help Students…
          </h3>
          <ul className="space-y-4 text-lg md:text-xl text-gray-700">
            <li>🌱 <strong>Become Self Learners</strong></li>
            <li>😊 <strong>Enjoy the Journey of Learning</strong></li>
            <li>👩‍🏫 <strong>Receive One-on-One Attention</strong></li>
            <li>🎯 <strong>Stay Focused on Their Future</strong></li>
          </ul>
          <a href="https://calendly.com/u-jnms08/30min" target="_blank" rel="noopener noreferrer">
            <button className="mt-8 px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold shadow-md hover:bg-blue-800 transition duration-300">
              Book a Free Consultation
            </button>
          </a>
        </div>
        <div className="md:w-1/2 animate-fade-in-right">
          <img
            src={mentorImage}
            alt="Mentor guiding student illustration"
            className="w-full max-w-md mx-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default NurturingLabGoals;
