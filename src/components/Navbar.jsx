import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          Logo
        </Link>
        <button className="nav-toggle" onClick={toggleMenu}>
          <span className="nav-icon">&#9776;</span>
        </button>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
