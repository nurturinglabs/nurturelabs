// HomePage.js

import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import WhyHardSection from '../components/WhyHardSection';
import OfferSection from '../components/OfferSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactForm';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyHardSection />
      <OfferSection />
      <MissionSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}

export default HomePage;
