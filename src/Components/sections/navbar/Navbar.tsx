import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import GridientBtn from "../../common/ui/gridient-btn/GridientBtn";
import "./Navbar.css";

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
          <AnchorLink className="anchor-link" href="#hero">
            Home
          </AnchorLink>
        </li>
        <li className="nav-list" onClick={closeMobileMenu}>
          <AnchorLink className="anchor-link" href="#about">
            About Me
          </AnchorLink>
        </li>
        <li className="nav-list" onClick={closeMobileMenu}>
          <AnchorLink className="anchor-link" href="#services">
            Service
          </AnchorLink>
        </li>
        <li className="nav-list" onClick={closeMobileMenu}>
          <AnchorLink className="anchor-link" href="#latest_work">
            {" "}
            Portfolio
          </AnchorLink>
        </li>
        <li className="nav-list" onClick={closeMobileMenu}>
          <AnchorLink className="anchor-link" href="#get_in_touch">
            Contact
          </AnchorLink>
        </li>
      </ul>

      <div className="hide-mobile">
        <GridientBtn>
          <AnchorLink className="anchor-link" href="#get_in_touch">
            Contact with me
          </AnchorLink>
        </GridientBtn>
      </div>
    </div>
  );
};

export default Navbar;
