// src/components/LandingPage.jsx
import React from 'react';

import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import StatsSection from './StatsSection';
import CallToActionSection from './CallToActionSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
