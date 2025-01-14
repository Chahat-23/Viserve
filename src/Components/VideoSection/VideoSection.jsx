import React from 'react'
import './VideoSection.css'

export default function VideoSection() {
  return (
    <div className="video-section">
      <div className="grey-corner-top"></div>
      <div className="video-container">
        <video autoPlay loop playsInline className="video-element">
          <source src="../../assets/video.mp4" type="video.mp4" />
          Video not supported
        </video>
      </div>
      <div className="video-desc">
        <h2>We live and breathe digital.</h2>
        <h2> The Internet is our playground.</h2>
        <p>
          Whether you're seeking data-driven paid ads that deliver results,
          social media strategies that spark conversations, captivating designs,
          or a seamless web presence, we’re committed to helping your business
          thrive. More than just a digital agency, we’re your growth
          partners—dedicated to transforming your brand’s digital footprint and
          elevating your business to new heights.
        </p>
      </div>
      <div className="grey-corner-bottom"></div>
    </div>
  );
}
