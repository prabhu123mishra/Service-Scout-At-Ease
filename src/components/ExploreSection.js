import React from "react";
import "./ExploreServices.css";
import { FaWrench, FaPaintBrush, FaCogs, FaBolt } from "react-icons/fa";

const ExploreServices = () => {
  const services = [
    {
      id: 1,
      name: "Plumbing",
      icon: <FaWrench />,
      link: "/services/plumbing",
    },
    {
      id: 2,
      name: "Painting",
      icon: <FaPaintBrush />,
      link: "/services/painting",
    },
    {
      id: 3,
      name: "Mechanics",
      icon: <FaCogs />,
      link: "/services/mechanics",
    },
    {
      id: 4,
      name: "Electrician",
      icon: <FaBolt />,
      link: "/services/electrician",
    },
  ];

  return (
    <div className="explore-services">
  <h2 className="section-title">Explore Services</h2>
  <div className="explore-content">
    {/* Left Side */}
    <div className="explore-left">
      <h2>You will explore in more area</h2>
    </div>
    
    {/* Right Side */}
    <div className="explore-right">
      <div className="services-container">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-box"
            onClick={() => window.location.href = service.link}
          >
            <div className="service-icon">{service.icon}</div>
            <div className="service-name">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default ExploreServices;
