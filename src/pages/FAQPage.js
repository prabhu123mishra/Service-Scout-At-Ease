import React, { useState } from "react";
import "./FAQPage.css";
import { FaChevronDown, FaPlus ,FaRegSmile, FaHome,FaLightbulb,GiHammerNails} from "react-icons/fa";
import { FaBroom, FaPlug, FaPaintRoller, FaToolbox } from "react-icons/fa";


const FAQPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  

  const faqs = [
    { id: 1, question: "What is ServiceScoutAtEase?", answer: "ServiceScoutAtEase provides a wide range of home services to ensure your comfort and satisfaction." },
    { id: 2, question: "How do I book a service?", answer: "You can book a service by visiting the 'Book Your Service' page and filling out the required details." },
    { id: 3, question: "How do I pay for my service?", answer: "We offer flexible payment options to suit your convenience. You can pay online using credit cards, debit cards, or popular digital payment methods like net banking or UPI. For offline transactions, you can pay in cash directly to the service provider after the service is completed." },
    { id: 4, question: "What is your cancellation policy?", answer: "You can cancel your service booking within the first 15 minutes at no cost. However, if you cancel after the 15-minute window, a cancellation fee of ₹50 will apply. "},
    { id: 5, question: "How to request a reservice?", answer: "Customers can request a reservice either by email (contact@ServiceScoutAtEase.com) or by phone (855-692-5326)— as long as the appointment was completed within the past 48 hours. The reservice appointment must be scheduled and completed within 72 hours of contact.Please let us know where we fell short.Our customer service team will respond promptly."},
    { id: 6, question: "How do I tip my service provider?", answer: "Tips are optional but are certainly appreciated by our service providers. Giving cash directly to your service providers is still an option."},
    { id: 7, question: "Do I need to provide equipments supplies?", answer: " No, you don’t need to provide any cleaning supplies or equipment. Our service providers come fully equipped with all the necessary tools and materials to ensure top-quality service."},
    { id: 8, question: "Are the service providers verified?", answer: "Yes, all our service providers go through a thorough background check and verification process to ensure your safety and quality service."},
    { id: 9, question: "What if the service provider is late?", answer: "If the service provider is late, you will be notified through your registered contact details. If the delay is significant, you can reschedule or cancel the booking without any penalty."},
    { id: 10,question: "Can I get an invoice for the service?", answer: "Yes, after the service is completed, you will receive an invoice via email or in your account dashboard."},
    { id: 11,question: "Can I reschedule my booking?", answer: "Yes, you can reschedule your booking up to 2 hours before the scheduled time without any additional charges."},
    { id: 12,question: "What should I do if I’m not satisfied with the service?", answer: "Your satisfaction is our priority. If you’re unhappy with the service, you can file a complaint through our customer support team, and we’ll address your concern promptly."},
    { id: 13,question: "How do I contact my service provider?", answer: "You can contact your assigned service provider through the in-app chat or call feature available after booking confirmation."},
    { id: 14,question: "Can I book multiple services at the same time?" , answer: "Yes, you can book multiple services in one session. Each service will be scheduled individually based on availability."},
    { id: 15,question: "Can I edit my booking details after confirmation?" , answer: "Yes, you can modify your booking details, such as date or time, through your account up to 2 hours before the service."},



 
    // Add more FAQs up to 15
  ];

  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  
  // Toggle visibility of the input field
  const handleAskQuestionClick = () => {
    setIsInputVisible(true);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      // You can submit the question here, for now just log it
      console.log('New question submitted:', newQuestion);
      // Reset input field after submission
      setNewQuestion('');
      setIsInputVisible(false);
    }
  }

  return (
    <div className="faq-page">
      {/* Header Section */}
      <div className="faq-header">
        <h1 className="faq-title">FREQUENTLY ASKED QUESTIONS  </h1>
        <FaRegSmile className="smile" size={40} />
      </div>

      {/* FAQ Questions */}
      <div className="faq-questions">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <span className="faq-number">{faq.id}</span>
              <span className="faq-text">{faq.question}</span>
              <span className="faq-icon">
                {activeQuestion === index ? <FaChevronDown /> : <FaPlus />}
              </span>
            </div>
            {activeQuestion === index && (
              <div className={`faq-answer ${activeQuestion === index ? "show" : ""}`}>
                 <p>{faq.answer}</p>
              </div>

            )}
          </div>
        ))}
      </div>

      {/* Ask New Question Section */}
      <div className="ask-question">
      {!isInputVisible ? (
        <button className="ask-question-button" onClick={handleAskQuestionClick}>
          Ask a New Question
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="ask-question-form">
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="question-input"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>

      {/* Footer Section */}
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


    </div>
  );
};

export default FAQPage;
