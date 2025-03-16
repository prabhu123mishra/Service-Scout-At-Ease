import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const services = [
    { id: 1, name: 'Cleaning', img: '/assets/cleaner2.jpg' },
    { id: 2, name: 'Electrician', img: '/assets/elect3.jpg' },
    { id: 3, name: 'Plumbing', img: '/assets/plumber2.jpg' },
    { id: 4, name: 'Gardening', img: '/assets/gardening1.jpg' },
    { id: 5, name: 'Carpentry', img: '/assets/carpenter2.jpg' },
  ];

  const [startIndex, setStartIndex] = useState(0); // Tracks the starting index of visible services
  const visibleCount = 3; // Number of services to display at once

  // Handle the "Next" button click
  const handleNext = () => {
    if (startIndex + visibleCount < services.length) {
      setStartIndex(startIndex + 1);
    }
  };

  // Handle the "Previous" button click
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Slice the visible services based on the startIndex and visibleCount
  const visibleServices = services.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="hero-section">
      {/* Background with slogan */}
      <div className="hero-bg">
        <h1 className="hero-slogan">Find Trusted Services Anytime, Anywhere</h1>
        <div className="service-icons">
          <img src="/assets/logo-modified.png" width={200} alt="Service logo" />
        </div>
      </div>

      {/* Slider */}
      <div className="slider">
        <button
          className="arrow-left"
          onClick={handlePrev}
          disabled={startIndex === 0} // Disable if at the start
        >
          ◀
        </button>
        <div className="slider-content">
          {visibleServices.map((service) => (
            <div className="slider-item" key={service.id}>
              <img src={service.img} alt={service.name} />
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
        <button
          className="arrow-right"
          onClick={handleNext}
          disabled={startIndex + visibleCount >= services.length} // Disable if at the end
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
