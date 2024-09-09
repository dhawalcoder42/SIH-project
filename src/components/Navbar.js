import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; 
import { FaUser } from 'react-icons/fa'; // Import the login icon

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Gestura Logo" className="logo-image" />
        <h1 className="logo">Gestura</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alphabets">Alphabets</Link></li>
        <li><Link to="/mathematics">Mathematics</Link></li>
        <li><Link to="/science">Science</Link></li>
        <li><Link to="/converter">Converter</Link></li>
        <li className="login-icon">
          <Link to="/login"><FaUser /></Link> {/* Use the icon here */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
