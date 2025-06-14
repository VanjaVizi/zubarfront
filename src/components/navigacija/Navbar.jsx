import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav>
   

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/dentists">Dentists</Link></li>

        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>


       
      </ul>

      
    </nav>
  );
};

export default Navbar;
