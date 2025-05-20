
import React from 'react';
 import './CSS/AppointmentForm.css';  
import { FaUser, FaPhone, FaCalendarAlt, FaClock } from 'react-icons/fa';

export const AppointmentForm = () => {
  return (
    <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <div className="input-wrapper">
          <FaUser className="icon" />
          <input type="text" id="name" name="name" placeholder="John Doe" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <div className="input-wrapper">
          <FaPhone className="icon" />
          <input type="tel" id="phone" name="phone" placeholder="Your Phone" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="date">Preferred Date</label>
        <div className="input-wrapper">
          <FaCalendarAlt className="icon" />
          <input type="date" id="date" name="date" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="time">Preferred Time</label>
        <div className="input-wrapper">
          <FaClock className="icon" />
          <input type="time" id="time" name="time" />
        </div>
      </div>

      <button type="submit" className="book-btn">Book an Appointment</button>
    </form>
  );
};
