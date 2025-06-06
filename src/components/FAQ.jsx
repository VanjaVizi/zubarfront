import React, { useState } from 'react';
import '../components/CSS/FAQ.css';  
import { IoLogoWechat } from 'react-icons/io5';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer general dentistry, cosmetic procedures, orthodontics, and emergency dental care.",
  },
  {
    question: "Do I need to make an appointment?",
    answer: "Yes, we recommend scheduling an appointment to ensure prompt service and availability.",
  },
  {
    question: "Do you accept walk-in appointments?",
    answer: "We do accept walk-ins depending on availability, but appointments are prioritized.",
  },
  {
    question: "Can I book an emergency dental appointment?",
    answer: "Absolutely. We provide 24/7 emergency care. Call us anytime for urgent dental issues.",
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, we offer virtual consultations for initial evaluations and follow-ups.",
  },
  {
    question: "What is the cost of a dental consultation?",
    answer: "Initial consultations start at $50. Contact us for a detailed breakdown based on services.",
  },
];

const FAQ = ({boja}) => {
  const [activeIndex, setActiveIndex] = useState(1); // 1 otvoreno po defaultu

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
   <section className={`faq-container ${boja ? boja : ''}`}>
      <div className="faq-left">
        <p className="podnaslov">FAQS</p>
        <h2 className="title">
          <span>Dental Care FAQ:</span> Your Questions Answered
        </h2>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggleAnswer(index)}
            >
              <div className="faq-question">
                <span>{item.question}</span>
                <span className="toggle-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="faq-right">
        <div className="contact-box">
          <div className="icon-placeholder"><IoLogoWechat /></div>
          <h4  className='naslovBeli'>You have different questions?</h4>
          <p  className='naslovBeli'>Our team will answer all your questions. We ensure a quick response.</p>
          <button>Contact Us</button>
        </div>

        <div className="emergency-box">
          <p>Your Smile, Our Priority</p>
          <h3>24/7 Emergency</h3>
          <p>(000) 000-0000</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
