import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Logo from "../assets/logo/XXLLOGO.png"
import { scrollToSection } from '../utils/scrollToSection';


const Footer = () => {
  return (
      <footer id="footer-section" className="footer-section orb-container" style={{marginTop: 50}}>
      <div className="footer-container">
              {/* Logo / Brand */}
              <div className="footer-brand">
                  <img src={Logo} alt="The Recruitment Academy logo" className="footer-logo" />
          <h2>The Recruitment Acadamy<span className="dot">.</span></h2>
          <p>© {new Date().getFullYear()} The Recruitment Acadamy. Alle rechten voorbehouden.</p>
        </div>

        {/* Navigation Links (Scroll Links) */}
        <ul className="footer-nav">
          <li><button className="nav-button" onClick={() => scrollToSection('home-section')}>Home</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection('why-pick-us', 100)}>Waarom Ons</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection('what-you-achieve', 25)}>Wat Je Bereikt</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection('community-section', 50)}>Community</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection('FAQ-section', 75)}>FAQ</button></li>
        </ul>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
