import React from 'react';
import './CSS/CaseStoriesSection.css';
import { LuArrowUpRight } from 'react-icons/lu';

export default function CaseStoriesSection() {
  return (
    <section className="case-section">
      <div className="case-header">
        <div>
          <p className="case-subtitle">OUR CASE STORIES</p>
          <h2 className="case-title">
            <span className="light-text">Patient Journeys to</span><br />
            <span>Healthier, Happier Smiles</span>
          </h2>
        </div>
        <button className="case-btn">Explore All Case Stories</button>
      </div>

      <div className="case-cards">
        
        <div className="case-card">
          <img src="../../images/dentistry.png" alt="Case 1" className="case-img" />
          <div className="case-info">
            <h3>A Brighter Tomorrow: <br />Sarah’s Whitening Journey</h3>
            <div className="case-tags">
              <span>2024</span>
              <span>Teeth Whitening</span>
              <span>Dental Care</span>
            </div>
          </div>
          <div className="case-icon"><LuArrowUpRight /></div>
        </div>

        <div className="case-card">
          <img src="../../images/case2.png" alt="Case 2" className="case-img" />
          <div className="case-info">
            <h3>A Beautiful Transformation: <br />Olivia’s Braces Journey</h3>
            <div className="case-tags">
              <span>2024</span>
              <span>Braces Treatment</span>
              <span>Dental Care</span>
            </div>
          </div>
          <div className="case-icon"><LuArrowUpRight /></div>
        </div>
      </div>
    </section>
  );
}
