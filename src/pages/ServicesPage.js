import React from 'react';
import './ServicePage.css';
import { FaHome, FaLightbulb, FaPaintRoller, FaToolbox, FaPlug } from 'react-icons/fa';


const services = [
  {
    id: 1,
    title: 'Electrician',
    img:  '/assets/electric 2.jpg',
    description: 'Expert electrical services to power your home and office. We ensure safe and efficient solutions tailored to your requirements.',
    formLink: '/electrician-form',
  },
  {
    id: 2,
    title: 'Plumber',
    img: '/assets/plumber.jpg',
    description: 'Professional plumbing solutions for all your needs. We handle everything from leaks and blockages to installations.',
    formLink: '/plumber-form',
  },
  {
    id: 3,
    title: 'Cleaner',
    img: '/assets/cleaner.jpg',
    description: 'Reliable cleaning services for homes and offices. We focus on thorough cleaning, ensuring a spotless and hygienic environment.',
    formLink: '/cleaner-form',
  },
  {
    id: 4,
    title: 'Painter',
    img: '/assets/airconditioner.jpg',
    description: 'Transform your space with our painting services. Our skilled painters deliver high-quality finishes.',
    formLink: '/painter-form',
  },
];

const ServicePage = () => {
  return (
    <div className="service-page">
      {services.map((service) => (
        <div key={service.id} className="service-item">
          <img src={service.img} alt={service.title} className="service-img" />
          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
          <button
            className="book-now-btn"
            onClick={() => (window.location.href = service.formLink)}
          >
            Book Now
          </button>
        </div>
      ))}
      <footer className="service-footer">
        
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
      </footer>
    </div>
  );
};

export default ServicePage;
