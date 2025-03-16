import React from "react";
import "./HowItWorks.css";
import { FaSearch, FaCalendarAlt, FaUserCheck, FaSmile } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Know About Services",
      icon: <FaSearch />,
      description: "Explore the wide range of services available on our platform.",
    },
    {
      number: 2,
      title: "Schedule Us",
      icon: <FaCalendarAlt />,
      description: "Pick a convenient time to schedule your service.",
    },
    {
      number: 3,
      title: "Let Us Do the Work",
      icon: <FaUserCheck />,
      description: "Sit back while we ensure quality service is delivered.",
    },
    {
      number: 4,
      title: "Get Your Service",
      icon: <FaSmile />,
      description: "Receive the service at your convenience.",
    },
    {
      number: 5,
      title: "Give Us Feedback",
      icon: <FaSmile />,
      description: "Help us improve by sharing your experience.",
    },
  ];

  return (
    <div className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.number} className="step">
            <div className="step-left">
              <div className="step-number">{step.number}</div>
            </div>
            <div className="step-right">
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <div className="step-title">{step.title}</div>
              </div>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
