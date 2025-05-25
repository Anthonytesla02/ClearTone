import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import PainPointsSection from './PainPointsSection';
import BeforeAfterSection from './BeforeAfterSection';
import WhatYouLearnSection from './WhatYouLearnSection';
import TestimonialsSection from './TestimonialsSection';
import MultiDeviceSection from './MultiDeviceSection';
import PricingSection from './PricingSection';
import FaqSection from './FaqSection';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import StickyBar from './StickyBar';

const ClearToneLanding: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ClearTone: Your Complete Acne-Fighting Routine</title>
        <meta name="description" content="Transform your skin with the science-backed ClearTone acne-fighting routine. Say goodbye to breakouts, redness, and embarrassment with our proven system." />
        <meta property="og:title" content="ClearTone: The Ultimate Acne-Fighting Routine" />
        <meta property="og:description" content="Transform your skin with a science-backed routine that actually works. Say goodbye to breakouts for good." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={window.location.href} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>

      <StickyBar />
      
      <main>
        <HeroSection />
        <PainPointsSection />
        <BeforeAfterSection />
        <WhatYouLearnSection />
        <TestimonialsSection />
        <MultiDeviceSection />
        <PricingSection />
        <FaqSection />
        <FinalCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default ClearToneLanding;
