import React from 'react';
import './CSS/TestimonialsSection.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Leslie Alexander',
    role: 'Satisfied Patient',
    rating: 5.0,
    title: 'Professional and Friendly!',
    text: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    image: '/images/testimonials1.png'
  },
  {
    name: 'Bessie Lane',
    role: 'Satisfied Patient',
    rating: 5.0,
    title: 'Highly Recommended!',
    text: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    image: '/images/testimonials2.png'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <p className="podnaslov naslovBeli">TESTIMONIALS</p>
      <h2 className="title naslovBeli">What Our <span>Patients Have to Say</span></h2>
      
      <div className="testimonials-wrapper">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
              <span className="rating-score">{t.rating}</span>
            </div>
            <h3 className="testimonial-title">{t.title}</h3>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-user">
              <img src={t.image} alt={t.name} />
              <div>
                <p className="name">{t.name}</p>
                <p className="role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        <span className="dot active" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
