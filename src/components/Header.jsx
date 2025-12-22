import React, { useState } from "react";
import OrderCourseButton from "./OrderCourseButton";
import { scrollToSection } from "../utils/scrollToSection";
import { useScrollProgress } from "../utils/scrollEffect"; 
import Logo1 from "../assets/logo/XXLLOGO.png";

function Header({ scrolled }) {
  const progress = useScrollProgress(); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section, offset) => {
    scrollToSection(section, offset);
    setIsMobileMenuOpen(false); // close menu after clicking
  };

  return (
    <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
      <div className={`navbar-wrapper ${scrolled ? "hidden" : ""}`}>
        
        <div className={`app-header-logo ${scrolled ? "scrolled" : ""}`}>
          <img src={Logo1} alt="DropNShop Logo" />
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="mobile-hamburger-icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* DESKTOP NAV */}
        <div className="app-header-button-container">
          <button className="nav-button" onClick={() => handleNavClick("home-section")}>Home</button>
          <button className="nav-button" onClick={() => handleNavClick("why-pick-us", 100)}>Waarom Ons</button>
          <button className="nav-button" onClick={() => handleNavClick("what-you-achieve", 25)}>Wat Je Bereikt</button>
          <button className="nav-button" onClick={() => handleNavClick("community-section", 50)}>Community</button>
          <button className="nav-button" onClick={() => handleNavClick("FAQ-section", 75)}>FAQ</button>
          <OrderCourseButton
            variant="nav-variant"
            onClick={() => window.open("https://form.typeform.com/to/C38vkZ7t", "_blank")}
          />

        </div>
      </div>

      <div className={`scroll-progress-wrap ${scrolled ? "scrolled" : ""}`}>
        <div className="scroll-progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      
      {/* ✅ MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => handleNavClick("home-section")}>Home</button>
          <button onClick={() => handleNavClick("why-pick-us", 100)}>Waarom Ons</button>
          <button onClick={() => handleNavClick("what-you-achieve", 25)}>Wat Je Bereikt</button>
          <button onClick={() => handleNavClick("community-section", 50)}>Community</button>
          <button onClick={() => handleNavClick("FAQ-section", 75)}>FAQ</button>
          <OrderCourseButton
            variant="mobile-variant"
            onClick={() => window.open("https://form.typeform.com/to/C38vkZ7t", "_blank")}
          /> 
        </div>
      )}

    </header>
  );
}

export default Header;
