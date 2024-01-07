import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../Image/logo.jpg';
import './Nav.css';

// Import the LoginPage and SignupPage components
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(null);

  // Function to set the current page to LoginPage
  const showLoginPage = () => {
    setCurrentPage('login');
  };

  // Function to set the current page to SignupPage
  const showSignupPage = () => {
    setCurrentPage('signup');
  };

  return (
    <div>
      <div className="navbar">
        <div className="left">
          <div className='logo'>
            <img src={logo} alt="Logo" />
          </div>
          <ul>
            {/* Use Link to navigate to the LoginPage */}
            <li><Link to="/login" onClick={showLoginPage}>Login</Link></li>
            {/* Use Link to navigate to the SignupPage */}
            <li><Link to="/signup" onClick={showSignupPage}>Signup</Link></li>
          </ul>
        </div>
        <div className='text-center'>
          <p>Toystore</p>
        </div>
        <div className="right">
          <span className="username">Your Name</span>
        </div>
      </div>

      {/* Render the selected page based on the state */}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'signup' && <SignupPage />}
    </div>
  );
};

export default Navbar;
