import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

export default function Header() {
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
        <button className="cta-button">Let's Talk</button>
      </div>
    </div>
  );
}
