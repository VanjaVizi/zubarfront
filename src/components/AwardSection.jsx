import React from 'react';
import './CSS/AwardSection.css';
 

const awards = [
  {
    image: '/images/award.png',
    year: 2024,
    title: 'Smile Excellence Award',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    image: '/images/award.png',
    year: 2023,
    title: 'Trusted Dentist Award',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    image: '/images/award.png',
    year: 2022,
    title: 'Advanced Dental Solutions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
     image: '/images/award.png',
    year: 2021,
    title: 'Premier Dental Provider',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  }
];

const AwardSection = () => {
  return (
    <section className="award-section">
      <p className="podnaslov">OUR AWARD</p>
      <h2 className="title">
        <span>Award-Winning</span> Dental Care
      </h2>

      <div className="award-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card">
            <div className="award-image">
              <img src={award.image} alt={award.title} />
            </div>
            <div className="award-content">
              <p className="award-year">{award.year}</p>
              <h3 className="award-title">{award.title}</h3>
              <p className="award-description">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardSection;
