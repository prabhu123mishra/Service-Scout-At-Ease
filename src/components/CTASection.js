import React from 'react';
import './CTASection.css';
import { FaBroom, FaBolt, FaWrench, FaToolbox, FaCogs } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="cta-section">
      {/* Left side: Question and icons */}
      <div className="cta-left">
            <h2>Why Choose Our Services?</h2>
            
            <div className="cta-icons">
          <FaBroom title="Cleaning Services" className="cta-icon" />
          <FaBolt title="Electrical Services" className="cta-icon" />
          <FaToolbox title="Plumbing Services" className="cta-icon" />
          <FaWrench title="Handyman Services" className="cta-icon" />
          <FaCogs title="Maintenance Services" className="cta-icon" />
        </div>
        </div>
      {/* Right side: Learn More button */}
      <div className="cta-right">
        <p>
            We provide reliable, professional, and affordable services that cater
            to all your home and office needs. Our team of experts ensures                top-notch quality and timely completion of tasks. With a wide range
            of services including cleaning, electrical repairs, plumbing, and
            maintenance, we are your one-stop solution for hassle-free service
            booking. Trust us to make your life easier and your home better!
        </p>
        <div>
            <button className="learn-more-btn">Learn More</button>
        </div>

      </div>
    </section>
  );
};

export default CTASection;
