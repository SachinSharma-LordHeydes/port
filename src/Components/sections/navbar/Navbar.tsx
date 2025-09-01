import { useState } from "react";
import "./Navbar.css";
import GridientBtn from "../../common/ui/gridient-btn/GridientBtn";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="nav-bar">
      <div className="nav-brand">Sachin</div>

      {/* Mobile menu toggle */}
      <div
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-lists ${isMobileMenuOpen ? "active" : ""}`}>
        <li className="nav-list" onClick={closeMobileMenu}>
          Home
        </li>
        <li className="nav-list" onClick={closeMobileMenu}>
          About Me
        </li>
        <li className="nav-list" onClick={closeMobileMenu}>
          Service
        </li>
        <li className="nav-list" onClick={closeMobileMenu}>
          Portfolio
        </li>
        <li className="nav-list" onClick={closeMobileMenu}>
          Contact
        </li>
      </ul>

      <div className="hide-mobile">
        <GridientBtn>Contact with me</GridientBtn>
      </div>
    </div>
  );
};

export default Navbar;
