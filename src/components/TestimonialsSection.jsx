import React from 'react';
import './CSS/TestimonialsSection.css';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Leslie Alexander',
    role: 'Satisfied Patient',
    rating: 5.0,
    title: 'Professional and Friendly!',
    text: 'This clinic exceeded all my expectations. Staff was kind and helpful from start to finish.',
    image: '/images/testimonials1.png'
  },
  {
    name: 'Bessie Lane',
    role: 'Satisfied Patient',
    rating: 5.0,
    title: 'Highly Recommended!',
    text: 'Best dental experience I have ever had. The service was fast and professional.',
    image: '/images/testimonials2.png'
  },
  {
    name: 'Robert Fox',
    role: 'Satisfied Patient',
    rating: 5.0,
    title: 'Very Impressed!',
    text: 'Excellent equipment and even better people. I felt relaxed the whole time.',
    image: '/images/testimonials1.png'
  },
  {
    name: 'Jenny Wilson',
    role: 'Satisfied Patient',
    rating: 5.0,
    title: 'Fantastic Service!',
    text: 'The staff is super friendly and always makes you feel welcome. Would recommend to anyone.',
    image: '/images/testimonials2.png'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <p className="podnaslov naslovBeli">TESTIMONIALS</p>
      <h2 className="title naslovBeli">What Our <span>Patients Have to Say</span></h2>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          768: { slidesPerView: 2 }
        }}
        className="testimonials-swiper"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
