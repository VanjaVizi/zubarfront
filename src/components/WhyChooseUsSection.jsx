import React from 'react';
import './CSS/WhyChooseUsSection.css';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';

export default function WhyChooseUsSection() {
  return (
    <section className="why-section">
      <div className="why-header">
        <p className="podnaslov">WHY CHOOSE US</p>
        <h2 className="title">
          Benefits of Our Dental Services: <br />
          <span>Your Path to a Healthier Smile</span>
        </h2>
      </div>

      <div className="why-content">
        <div className="why-left">
          <div className="video-thumbnail" onClick={() => window.open('https://www.youtube.com/watch?v=VIDEO_ID', '_blank')}>
            <img src="../../images/dentistry.png" alt="Why choose us" />
            <div className="overlay-circles"></div>
            <div className="play-button">
              <div className="circle"></div>
              <FaPlay className="triangle"></FaPlay> 
              
            </div>
            {/* <img src="../../images/stars.png" className="stars" alt="stars" />
            <img src="../../images/dots.png" className="dots-top-right" alt="dots" /> */}
          </div>
        </div>

        <div className="why-right">
          <p className="why-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>

          <div className="stats">
            <div>
              <h3>10+</h3>
              <p>Skilled Doctors</p>
            </div>
            <div>
              <h3>99%</h3>
              <p>Patient Satisfaction</p>
            </div>
            <div>
              <h3>20K+</h3>
              <p>Appointment Booked</p>
            </div>
          </div>

          <ul className="why-list">
            <li><FaCheckCircle /> Easy Online Appointment Booking</li>
            <li><FaCheckCircle /> Experienced and Caring Dentists</li>
            <li><FaCheckCircle /> Advanced Dental Equipment</li>
          </ul>

          <button className="why-btn">Book an Appointment</button>
        </div>
      </div>
    </section>
  );
}
