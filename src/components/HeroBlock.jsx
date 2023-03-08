import React from "react";

const HeroBlock = () => {
  return (
    <div className="hero-block">
      <div className="hero-block__content">
        <h2 className="hero-block__title_2">MODERN INTERIOR</h2>
        <h1 className="hero-block__title">Create Your Interior Design.</h1>
        <p className="hero-block__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <a className="hero-block__button" href="#contacts">
          CONTACT
        </a>
      </div>
      <div className="hero-block__image">
        <img src="/assets/2.jpg" alt="Logo" />
      </div>
    </div>
  );
};

export default HeroBlock;
