import React from 'react';
import '../components/CSS/NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">
        Oops! <span>Page not Found</span>
      </h2>
      <p className="notfound-text">
        The page you are looking for cannot be found. Take a break before trying again.
      </p>
      <button className="notfound-button" onClick={() => navigate('/')}>
        Go To Home Page
      </button>
    </div>
  );
};

export default NotFound;
