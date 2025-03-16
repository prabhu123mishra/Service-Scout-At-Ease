import React from 'react';
import './Footer.css'; // Add the corresponding styles here
import { FaHome } from 'react-icons/fa';
import { FaLightbulb} from "react-icons/fa";
import {  FaPlug, FaPaintRoller, FaToolbox } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="faq-footer">
      {/* Footer logo and site name */}
      <div className="footer-top">
        <div className="footer-logo">
          <FaHome size={40} />
          <span className="footer-site-name">ServiceScoutAtEase</span>
        </div>
    
        {/* Footer icons on the right */}
        <div className="footer-icons">
          <div onClick={() => window.location.href = '/'}>
            <FaLightbulb size={24} />
          </div>
          <div onClick={() => window.location.href = '/'}>
            <FaPaintRoller size={24} />
          </div>
          <div onClick={() => window.location.href = '/'}>
            <FaToolbox size={24} />
          </div>
          <div onClick={() => window.location.href = '/'}>
            <FaPlug size={24} />
          </div>
        </div>
      </div>
    
      {/* Thin separating line */}
      <div className="footer-line"></div>
    
      {/* Footer additional details */}
      <div className="footer-details">
        <div className="footer-contact">
          <p>We clean. You relax.</p>
          <p>855-MyClean NYC & Chicago</p>
        </div>
    
        <div className="footer-links">
          <h4>The Goods</h4>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Become a Service Provider</p>
        </div>
    
        <div className="footer-links">
          <h4>Our Services</h4>
          <p>Home Cleaning</p>
          <p>Office Cleaning</p>
          <p>75 Point Checklist</p>
        </div>
    
        <div className="footer-links">
          <h4>Connect</h4>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
