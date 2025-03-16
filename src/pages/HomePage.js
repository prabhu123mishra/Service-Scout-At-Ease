import React from 'react';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import './HomePage.css';
import HowItWorks from '../components/HowItWorks';
import ExploreServices from '../components/ExploreSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='homepage'>
      <HeroSection />
      <CTASection />
      <HowItWorks />
      <ExploreServices />
      <Footer />
      {/* Add other sections like CTASection, HowItWorks, etc. */}
    </div>
  );
};

export default HomePage;
