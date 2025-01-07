import React from "react";
import "./HomePage.css";
import Marquee from "react-fast-marquee";

export default function HomePage() {
  return (
    <div className="home">
      <div className="homepage">
        <div className="content-wrapper">
          <div className="homepage-title">
            Your Go-To Marketing Wizards for a Successful Digital Journey
          </div>
          <div className="homepage-desc">
            Engage, Convert, and Grow with Our Expert Digital Solutions - We're
            the Digital Partners You Need for Growth
          </div>
          <button className="homepage-cta">Schedule a Call -></button>
        </div>
      </div>

      <div className="background-strip"></div>

      <div className="marquee-container">
        <Marquee gradient={false} speed={100}>
          <div className="marquee-item">DIGITAL MARKETING</div>
          <div className="marquee-item">*</div>
          <div className="marquee-item">WEB DEVELOPMENT</div>
          <div className="marquee-item">*</div>
          <div className="marquee-item">SEO</div>
          <div className="marquee-item">*</div>
          <div className="marquee-item">CONTENT STRATEGY</div>
          <div className="marquee-item">*</div>
          <div className="marquee-item">SOCIAL MEDIA</div>
          <div className="marquee-item">*</div>
          <div className="marquee-item">BRAND GROWTH</div>
          <div className="marquee-item">*</div>
        </Marquee>
      </div>
    </div>
  );
}
