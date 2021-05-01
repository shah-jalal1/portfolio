import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div  className="jumbotron">
        <div className="container">
          <h1 className="hero-title" >
            Hi, my name is <span className="text-color-main">Shah Jalal</span>
            <br />
            Full-stack Web Developer.
          </h1>
          <p className="hero-cta" className="load-hidden">
            <a className="cta-btn cta-btn--hero" href="#about">Know more</a>
          </p>

          <a href="https://drive.google.com/uc?export=download&id=1ss1i0nibS5sMuo4V9OHXPQmYU75mY81M">Get In Touch</a>



        </div>
      </div>
    );
};

export default Hero;