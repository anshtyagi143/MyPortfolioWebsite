import React from "react";
import "./Hero.css";
import img from "../../assets/Img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Import your resume image
import resumeImg from "../../assets/Ansh_Tyagi_page-0001.jpg";

const Hero = () => {
  // No need for useState here

  // Function to open resume in new tab
  const handleResumeClick = () => {
    window.open(resumeImg, "_blank");
  };

  return (
    <div id="home" className="hero">
      <img src={img} alt="" />
      <h1>
        <i>I'm Ansh Tyagi,</i> Frontend Developer || Java Developer
      </h1>
      <p>
        I am a fresher,skilled in HTML, CSS, JavaScript, React.js, Java,MySQL. I
        create responsive and user-friendly web applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div
          className="hero-resume"
          onClick={handleResumeClick}
          style={{ cursor: "pointer" }}
        >
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
