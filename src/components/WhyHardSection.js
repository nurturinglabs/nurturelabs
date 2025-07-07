// WhyHardSection.js

import React from 'react';
import {
  ExclamationTriangleIcon,
  UsersIcon,
  GlobeAltIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';


function WhyHardSection() {
  const reasons = [
  {
    title: 'Rote learning, not understanding',
    desc: 'Tuitions focus on cramming for marks, not real concept clarity.',
    Icon: ExclamationTriangleIcon,
    bg: 'bg-red-200',
    iconColor: 'text-red-700',
    cardBg: 'bg-red-50',
  },
  {
    title: 'No space for curiosity',
    desc: 'Students rarely get to ask “why” — they’re rushed through formulas and facts.',
    Icon: UsersIcon,
    bg: 'bg-yellow-200',
    iconColor: 'text-yellow-700',
    cardBg: 'bg-yellow-50',
  },
  {
    title: 'Same method for every child',
    desc: 'Tuitions treat all students the same — ignoring different learning styles.',
    Icon: GlobeAltIcon,
    bg: 'bg-green-200',
    iconColor: 'text-green-700',
    cardBg: 'bg-green-50',
  },
  {
    title: 'Burnout and boredom',
    desc: 'Overloaded with school + tuitions, students lose interest and energy.',
    Icon: InformationCircleIcon,
    bg: 'bg-blue-200',
    iconColor: 'text-blue-700',
    cardBg: 'bg-blue-50',
  },
];


  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Traditional Tuitions Are Killing The Joy Of Learning
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map(({ title, desc, Icon, bg, iconColor, cardBg }, index) => (
            <div
              key={index}
              className={`${cardBg} p-6 rounded-xl text-center shadow-md transition group hover:scale-105 hover:shadow-lg`}
            >
              <div className={`${bg} w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4`}>
                <Icon className={`h-6 w-6 ${iconColor} transition-transform duration-300 group-hover:scale-125`} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyHardSection;
