import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function handleNavMenuClick() {
    setShowNav((prev) => {
      return !prev;
    });
  }

  function handleLinkClick() {
    setShowNav(false);
  }

  return (
    <nav className="navbar">
      <span className="logo">&lt;/&gt; Miran</span>
      <span onClick={handleNavMenuClick} className="navbar__menu-icon">
        {showNav ? (
          <RxCross2 style={{ fontSize: "30px" }} />
        ) : (
          <FaBars style={{ fontSize: "30px" }} />
        )}
      </span>

      {showNav && (
        <ul className="navbar__links">
          <li className="navbar__link-item">
            <a href="#" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li className="navbar__link-item">
            <a href="#aboutSection" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li className="navbar__link-item">
            <a href="#projectSection" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li className="navbar__link-item">
            <a href="#contactSection" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
