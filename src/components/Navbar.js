import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        ServiceScoutAtEase
      </div>
      <div className="navbar-actions">
        <input 
          type="text" 
          placeholder="Search your location..." 
          className="location-input" 
        />
        <div >
        <button className="navbar-button">
           <Link to="/services">Services</Link>
        </button>

          
        </div>
        <button className="register-provider-btn" onClick={() => navigate('/become-provider')}>
          Become a Service Provider
        </button>
        <button className="faq-btn" onClick={() => navigate('/faq')}>FAQ</button>
        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
      </div>
    </nav> 
   
  );
};

export default Navbar;
