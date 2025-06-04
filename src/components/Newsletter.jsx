import React from 'react';
import '../components/CSS/Newsletter.css';
import { MdEmail } from 'react-icons/md';

const Newsletter = () => {
  return (
    <section className="newsletter-container">
      <p className="podnaslov">OUR NEWSLETTER</p>
      <h2 className="title">
        Subscribe to Our Newsletter for the <span>Latest Updates and Offers</span>
      </h2>

      <form className="newsletter-form">
        <div className="input-wrapper">
          <span className="email-icon"><MdEmail /></span>
          <input
            type="email"
            placeholder="Enter Email Address"
            required
          />
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
