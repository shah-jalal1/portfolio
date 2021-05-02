import React from 'react';
import './Hero.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <div  className="jumbotron">
        <div className="container">
          <h1 className="hero-title" >
            Hi, my name is <span className="text-color-main">Shah Jalal</span>
            <br />
            Full-stack Web Developer.
          </h1>
          <p className="hero-cta">
            I'm a software engineer based on exceptional websites,<br/> applications, and everything in between.
          </p>

          <a href="https://drive.google.com/uc?export=download&id=1ss1i0nibS5sMuo4V9OHXPQmYU75mY81M"><button className="btn btn-success">Resume</button></a>

          <div className="mt-4">
            <a href="https://github.com/shah-jalal1" target="_blank"><FaGithub size={40}/></a>
            <a href="https://www.linkedin.com/in/shah-jalal-10/" target="_blank" className="ml-4"><FaLinkedin size={40}/></a>
          </div>

        </div>
      </div>
    );
};

export default Hero;