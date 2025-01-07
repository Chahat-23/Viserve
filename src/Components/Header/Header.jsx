import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  return (
    <div className="header-wrap">
      <div className="header">
        <div className="logo">
          <img src={logo} />
        </div>
        <nav className="midSection">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Our Process</li>
            <li>Clients</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <button className="cta-button desktop-cta">Let's Talk</button>

        <div className="hamburger-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoMdClose size={28} color="white" />
          ) : (
            <HiMenu size={28} color="white" />
          )}
        </div>

        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Our Process</li>
            <li>Clients</li>
            <li>Contact Us</li>
          </ul>
          <button className="cta-button mobile-cta">Let's Talk</button>
        </div>
      </div>
    </div>
  );
}
