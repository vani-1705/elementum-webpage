import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import FAQs from './FAQs';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false)

  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">Elementum</div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#studio">Studio</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#faqs" onClick={(e) => {
            e.preventDefault();
            setShowFAQs(true);
            setMenuOpen(false);
        }}> FAQs </a>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
            <FaTimes />
            ) : (
            <div className="two-lines">
                <span></span>
                <span></span>
            </div>
        )}
      </div>
    </nav>

    {/* FAQs Modal*/}
    {showFAQs && (
        <div className="faqs-overlay" onClick={() => setShowFAQs(false)}>
            <div className="faqs-modal" onClick={(e) => e.stopPropagation()}>
            <button className="faqs-close" onClick={() => setShowFAQs(false)}>
            <FaTimes />
            </button>
                <FAQs />
            </div>
            </div>
    )}
    </>
  );
};

export default Navbar;