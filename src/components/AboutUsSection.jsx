
import React from 'react';
import './CSS/AboutUsSection.css';
 
import { FaCheckCircle } from 'react-icons/fa';

export const AboutUsSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="../../images/about-us.png" alt="Dental care" />
        </div>

        <div className="about-text">
          <p className="about-subtitle">About us</p>
          <h2><span className="highlight">15 Years of Expertise</span> in Dental Care</h2>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="about-list">
            <li><FaCheckCircle className="icon" /> Premium Dental Services You Can Trust</li>
            <li><FaCheckCircle className="icon" /> Award-Winning Experts in Dental Care</li>
            <li><FaCheckCircle className="icon" /> Dedicated Experts Behind Every Smile</li>
          </ul>

          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};
