import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#studio">Studio</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Terms & Policies</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#explore"> Explore </a></li>
            <li><a href="#accessibility">Accessibility</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="#youtube">YouTube</a></li>
            <li><a href="#twitter">Twitter</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Terms & Policies</h4>
          <p> 1498w Fluton ste, STE <br /> 2D Chicgo,IL 63867 </p>
          <p>(123) 456789000 </p>
          <p>info@elementum.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p> ©2023 Elementum. All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;