// OfferSection.js

import React from 'react';
import {
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

function OfferSection() {
  const offers = [
  {
    title: 'Personalized mentoring, not batch teaching',
    Icon: ChatBubbleLeftRightIcon,
    bg: 'bg-green-200',
    iconColor: 'text-green-700',
    cardBg: 'bg-green-50',
  },
  {
    title: 'Concept clarity over cramming',
    Icon: PresentationChartLineIcon,
    bg: 'bg-blue-200',
    iconColor: 'text-blue-700',
    cardBg: 'bg-blue-50',
  },
  {
    title: 'Weekly 1:1 sessions to track real progress',
    Icon: AcademicCapIcon,
    bg: 'bg-orange-200',
    iconColor: 'text-orange-700',
    cardBg: 'bg-orange-50',
  },
  {
    title: 'Guidance for both students and parents',
    Icon: UsersIcon,
    bg: 'bg-purple-200',
    iconColor: 'text-purple-700',
    cardBg: 'bg-purple-50',
  },
];

  return (
    <section className="py-16 md:py-20 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {offers.map(({ title, Icon, bg, iconColor, cardBg }, index) => (
            <div
              key={index}
              className={`${cardBg} p-6 rounded-xl text-center shadow-md transform transition duration-300 group hover:scale-105 hover:shadow-lg`}
            >
              <div className={`${bg} w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4`}>
                <Icon className={`h-10 w-10 ${iconColor} transition-transform duration-300 group-hover:scale-125`} />
              </div>
              <h3 className="font-semibold text-base">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
