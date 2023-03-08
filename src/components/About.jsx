import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about__image">
        <img src="/assets/4.jpg" alt="Room interior" />
      </div>
      <div className="about__content">
        <h2 className="about__title_2">ABOUT US</h2>
        <h1 className="about__title">
          Interioris The Will of An Epoch Mextreo
        </h1>
        <p className="about__text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form injected humour, or
          randomised words which don't look even slightly believable.If you are
          going to use a passage of Lorem Ipsum, sure there isn't anything
          embarrassing hidden the middleof text. All the Lorem Ipsum generators
          on the Internettend to repeat predefined chunks as necessary,making
          this the first true generator on the Internet.
        </p>
        <div className="about__button">
          <Link to="/learn">LEARN MORE</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
