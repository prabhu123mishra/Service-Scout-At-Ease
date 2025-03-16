import React from 'react';
import './LearnMorePage.css';

const LearnMorePage = () => {
  return (
    <div className="learn-more-page">
      <h1>About Our Services</h1>
      <p>
        At ServiceScoutAtEase, we pride ourselves on delivering high-quality services to meet your everyday needs.
        Whether it's cleaning, electrical repairs, plumbing, or general maintenance, our platform connects you with 
        trusted professionals who ensure your satisfaction. Our mission is to simplify service booking and bring 
        convenience right to your doorstep. With a user-friendly interface and a dedicated support team, we make 
        finding reliable service providers hassle-free. Choose us for professional service and peace of mind.
      </p>
      <p>
        Here's why thousands of customers trust us:
        <ul>
          <li>Affordable pricing</li>
          <li>Verified professionals</li>
          <li>Timely services</li>
          <li>Easy booking process</li>
          <li>Comprehensive range of services</li>
        </ul>
      </p>
    </div>
  );
};

export default LearnMorePage;
