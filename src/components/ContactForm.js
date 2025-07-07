// ContactSection.js

import React, { useState } from 'react';
import contactImage from '../assets/contact-themed_v2.png';

function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactMethod: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    setForm({ name: '', email: '', phone: '', message: '', contactMethod: '' });
  };

  return (
    <section className="bg-gradient-to-tr from-blue-50 via-white to-orange-50 py-4 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Side: Image */}
        <div className="flex-1">
          <img
            src={contactImage}
            alt="Student and mentor illustration"
            className="w-full max-w-md mx-auto rounded-2xl drop-shadow-xl"
          />
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-4 md:p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
            Let’s Get You Started
          </h2>
          <p className="text-center text-gray-600 mb-4 text-sm">
            Share your details and we'll reach out to guide you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white/90 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white/90 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white/90 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <select
              name="contactMethod"
              value={form.contactMethod}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white/90 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Preferred Contact Method</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
            <textarea
              name="message"
              placeholder="Message or Interest"
              rows="3"
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white/90 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-2.5 rounded-md shadow hover:scale-105 transition"
            >
              📞 Schedule a Free 15-min Call
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
