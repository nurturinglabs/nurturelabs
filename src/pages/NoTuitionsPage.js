import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import mentorImage from '../assets/mentor-illustration.png';

export default function NoTuitionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50 py-10 px-6 md:px-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4">
          No Tuitions. Just Real Learning.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
          Break free from the coaching race. Discover your real potential with mentorship that matters.
        </p>
        <a
          href="https://calendly.com/nurturinglabs/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-2xl shadow-md transition-all"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* Why No Tuitions */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Why Say No to Tuitions?</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          <li className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-400">
            ❌ Pressure to memorize instead of understanding.
          </li>
          <li className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-400">
            ❌ No personal mentoring or emotional support.
          </li>
          <li className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-400">
            ❌ Rigid schedules leave no room for passion projects.
          </li>
          <li className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-400">
            ❌ Focus on marks, not real-world skills or joy.
          </li>
        </ul>
      </section>

      {/* What We Offer */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">What We Offer Instead</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-blue-100 p-6 rounded-2xl shadow">
            ✅ One-on-one mentorship tailored to your goals.
          </div>
          <div className="bg-blue-100 p-6 rounded-2xl shadow">
            ✅ Help discovering the right college & career.
          </div>
          <div className="bg-blue-100 p-6 rounded-2xl shadow">
            ✅ Tools to explore your interests with freedom.
          </div>
          <div className="bg-blue-100 p-6 rounded-2xl shadow">
            ✅ Support for building confidence and clarity.
          </div>
        </div>
      </section>

      {/* Illustration Section */}
      <section className="mb-20 text-center">
        <motion.img
          src={mentorImage}
          alt="Mentor Illustration"
          className="mx-auto w-full max-w-xl rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Let’s Plan Your Journey Without Tuitions</h2>
        <Link
          to="/book"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-2xl shadow-md transition-all"
        >
          Book Free Mentorship Session
        </Link>
      </section>
    </div>
  );
}
