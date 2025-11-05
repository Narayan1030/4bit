import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import whitelogo from "../../../assets/4bitlogowhite.png";
import blacklogo from "../../../assets/4bitlogoblack.png";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router";

import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ light, setLight }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  function toggleTheme() {
    setLight(!light);
  }

  function openHamburgerMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    if (!showMenu) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showMenu]);

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behaviour: "smooth", block: "start" });
  };

  return (
    <>
      <div className="navbar">
        <div className="logo" onClick={() => scrollToSection("hero")}>
          <img
            src={light ? `${blacklogo}` : `${whitelogo}`}
            alt="company logo"
            className="fourbitlogo"
          />
        </div>
        <div className="services" ref={menuRef}>
          <ul className={showMenu ? "mobile-nav" : "nav-services"}>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("work")}>Work</li>
            <li onClick={() => scrollToSection("process")}>Process</li>
            <li onClick={() => scrollToSection("price")}>Pricing</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>

          <div className="toggle-container">
            <label className="switch">
              <input type="checkbox" onChange={toggleTheme} checked={light} />

              <span className="slider"></span>
            </label>
          </div>
          
          <button className="quote" onClick={() => scrollToSection("contact")}>
            Get a Quote
          </button>
          <Link to="/admin">
            <button>
              <RiAdminFill />
            </button>
          </Link>
          <div
            className="hamburger-menu"
            onClick={(e) => {
              e.stopPropagation();
              openHamburgerMenu();
            }}
          >
            <GiHamburgerMenu style={{ backgroundColor: "var(--bg-color)" }} />
          </div>
          
        </div>
      </div>
    </>
  );
}
