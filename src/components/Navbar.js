import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Learning App</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alphabets">Alphabets</Link></li>
        <li><Link to="/mathematics">Mathematics</Link></li>
        <li><Link to="/science">Science</Link></li>
        <li><Link to="/converter">Converter</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
