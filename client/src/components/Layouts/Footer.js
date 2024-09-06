import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section contact-details">
            <h3>Contact Us</h3>
            <p>Address: 1/180 N.S.G Bode Road Kolkata- 700070</p>
            <p>Phone: 6289657682</p>
            <p>
              Email: sardarkuntal273@gmail.com || somsubhra12@gmail.com ||
              mitrodru23@gmail.com || kaif34@gmail.com
            </p>
          </div>
          <div className="footer-section copyright-details">
            <p>&copy; 2024 Blood-Bank-Production. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
